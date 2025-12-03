"use client";

import * as React from "react";
import PhoneInputBase, {
  getCountryCallingCode,
  type Country,
  type Value,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/* ================================================================== */
/*                           MAIN COMPONENT                            */
/* ================================================================== */

export function PhoneInput({
  value,
  onChange,
  className,
  ...props
}: {
  value?: Value;
  onChange?: (value: Value) => void;
  className?: string;
}) {
  // initialize to incoming value OR default to "+91"
  const [internalValue, setInternalValue] = React.useState<Value | undefined>(
    () => value ?? "+91"
  );

  // keep internal state synced when parent controls the value prop
  React.useEffect(() => {
    if (value !== undefined) setInternalValue(value);
  }, [value]);

  const handleChange = (v: Value) => {
    setInternalValue(v);
    onChange?.(v);
  };

  return (
    <PhoneInputBase
      value={internalValue}
      onChange={handleChange}
      inputComponent={InputComponent}
      countrySelectComponent={CountrySelect}
      flagComponent={FlagComponent}
      smartCaret={false}
      // set the default / current country to India
      country="IN"
      defaultCountry="IN"
      initialValueFormat="national"
      className={cn("flex w-full", className)}
      {...props}
    />
  );
}

/* ================================================================== */
/*                             INPUT BOX                               */
/* ================================================================== */

const InputComponent = React.forwardRef<HTMLInputElement, any>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
        className={cn(
          "h-12 px-4 text-base",
          "rounded-lg rounded-s-none",
          "border-s-0 bg-white",
          "placeholder:text-slate-400",
          "focus-visible:ring-2 focus-visible:ring-blue-600",
          className
        )}
      />
    );
  }
);
InputComponent.displayName = "InputComponent";

/* ================================================================== */
/*                           COUNTRY SELECT                            */
/* ================================================================== */

function CountrySelect({
  value,
  options,
  onChange,
}: {
  value?: Country;
  options: { value: Country; label: string }[];
  onChange: (value: Country) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen} modal>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2 px-3 h-12 rounded-lg rounded-e-none border-r-0 bg-white"
        >
          <FlagComponent country={value} countryName={value} />
          <ChevronsUpDown className="w-4 h-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-72 p-0">
        <Command>
          <CommandInput
            placeholder="Search…"
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No results.</CommandEmpty>

              <CommandGroup>
                {options
                  .filter(
                    (c) =>
                      c.value &&
                      c.label.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((c) => (
                    <CountryOption
                      key={c.value}
                      country={c.value}
                      label={c.label}
                      selected={value}
                      onSelect={(v) => {
                        onChange(v);
                        setOpen(false);
                      }}
                    />
                  ))}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ================================================================== */
/*                     COUNTRY OPTION ROW IN DROPDOWN                 */
/* ================================================================== */

function CountryOption({
  country,
  label,
  selected,
  onSelect,
}: {
  country: Country;
  label: string;
  selected?: Country;
  onSelect: (c: Country) => void;
}) {
  if (!country) return null; // Safety

  return (
    <CommandItem className="gap-2" onSelect={() => onSelect(country)}>
      <FlagComponent country={country} countryName={label} />

      <span className="flex-1">{label}</span>

      <span className="text-muted-foreground">
        +{getCountryCallingCode(country)}
      </span>

      <Check
        className={cn(
          "ml-auto h-4 w-4",
          selected === country ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  );
}

/* ================================================================== */
/*                              FLAG ICON                             */
/* ================================================================== */

function FlagComponent({
  country,
  countryName,
}: {
  country?: Country;
  countryName?: string;
}) {
  const Flag = country ? flags[country] : null;

  return (
    <span className="w-6 h-4 overflow-hidden rounded-sm bg-muted flex items-center justify-center">
      {Flag ? (
        <Flag title={countryName} style={{ width: "100%", height: "100%" }} />
      ) : (
        <span className="text-[10px] text-muted-foreground">--</span>
      )}
    </span>
  );
}
