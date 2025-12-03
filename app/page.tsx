"use client";
import { Container } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import * as React from "react";
import { E164Number } from "libphonenumber-js/core";
import { IoIosPeople } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { FaCertificate } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { SiDoi } from "react-icons/si";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Upload } from "lucide-react";
import { FileUp } from "lucide-react";
import { Plus } from "lucide-react";
import { FaFileArrowUp } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { PhoneInput } from "@/components/ui/phone";
import { FaUpload } from "react-icons/fa6";

export default function Home() {
  const [phone, setPhone] = React.useState<E164Number | undefined>();

  const countryOptions = [
    { label: "India", value: "IN" },
    { label: "United States", value: "US" },
    { label: "United Kingdom", value: "GB" },
    { label: "Australia", value: "AU" },
    { label: "Canada", value: "CA" },
    { label: "Sri Lanka", value: "LK" },
    { label: "Singapore", value: "SG" },
  ];

  return (
    <div className="bg-gray-50 p-3">
      <div className="lg:pt-20 pt-10 max-w-7xl w-full mx-auto overflow-y-auto">
        <div className=" text-black font-bold text-3xl font-inter mx-auto ">
          Submit Research Paper
        </div>
        <p className="text-lg pt-2">
          Complete the form below to submit your research paper for review
        </p>
        <div className=" gap-8 lg:pt-16 pt-8 flex flex-col lg:flex-row mx-auto  ">
          <div className="bg-white lg:w-[800px] w-full  rounded-2xl border p-8  ">
            <div>
              <Label className="mb-2 ">
                Manuscript Title<span className="text-red-500">*</span>
              </Label>
              <Input
                className=" p-6"
                type="text"
                placeholder="Enter your research paper title"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-x-6 lg:gap-y-0">
              <div>
                <Label className="mt-8  pb-2 ">
                  Author Name<span className="text-red-500">*</span>
                </Label>
                <Input
                  className=" p-6"
                  type="text"
                  placeholder="Enter main author name"
                />
                <p className="pt-2 text-sm text-gray-500">
                  Add main author info
                </p>
              </div>
              <div>
                <Label className="mt-2 lg:mt-8 pb-2 block font-medium text-gray-700">
                  Upload Author Photo <span className="text-red-500">*</span>
                </Label>

                <label
                  className="flex  items-center justify-center 
      w-full h-12 
      border border-gray-300 rounded-md 
      cursor-pointer bg-white
      text-gray-500 text-sm
      gap-[9px]
    "
                >
                  <FaUpload color="slate-500" size={14} />

                  <span>Choose file</span>
                  <input type="file" className="hidden" />
                </label>

                <p className="pt-2 text-sm text-gray-500">
                  JPG, PNG files (max 1MB)
                </p>
              </div>

              <div>
                <Label className="mt-2 lg:mt-8 pb-2 ">
                  Email Adress<span className="text-red-500">*</span>
                </Label>

                <Input
                  className=" p-6"
                  type="email"
                  placeholder="your.email@domain.com"
                />
                <p className="pt-2 text-sm text-gray-500">
                  Double-check your email before submitting
                </p>
              </div>

              <div>
                <Label className="mt-2 lg:mt-8 pb-2 ">
                  Phone Number<span className="text-red-500">*</span>
                </Label>

                <PhoneInput/>

                <p className="pt-2 text-sm text-gray-500">
                  Double-check your email before submitting
                </p>
              </div>

              <div>
                <Label className="mt-2 lg:mt-8 pb-2 ">
                  Department<span className="text-red-500">*</span>
                </Label>
                <Input
                  className=" p-6"
                  type="text"
                  placeholder="e.g., Department of Computer Science"
                />
                <p className="pt-2 text-sm text-gray-500">
                  Mention the full department name clearly.
                </p>
              </div>
              <div>
                <Label className="mt-2 lg:mt-8 pb-2 ">
                  College/Institution Name
                  <span className="text-red-500">*</span>
                </Label>
                <Input
                  className=" p-6"
                  type="text"
                  placeholder="e.g., ABC College of Engineering"
                />
                <p className="pt-2 text-sm text-gray-500">
                  Use the official name of your college or university.
                </p>
              </div>
            </div>
            <div className="container bg-blue-50 mt-[14px] rounded-lg lg:p-1 pl-[12px] p-3 flex flex-col md:flex-row justify-between gap-2">
              <p className="text-sm text-slate-500 flex lg:items-center pl-3 items-start gap-2">
                <FaInfoCircle size={14} className="text-blue-800" />
                No co-authors added yet. Click "Add Co-Author" to add one. (Max
                7 Authors)
              </p>
              <Button className="gap-2">
                <Plus color="white" size={24} />
                Add Co-Author(s)
              </Button>
            </div>
            <div className=" mt-[14px] rounded-lg p-1 gap-1 flex items-center   justify-end">
              <Checkbox></Checkbox>
              <p className="text-xs text-slate-500">
                Copy Department and Institution details from Main Author
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <Label className="mt-8 lg:mt-8 pb-2 ">
                  Article Type<span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-6 pr-10 ">
                    <SelectValue placeholder="Select article type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mt-2 lg:mt-8 pb-2 ">
                  Select Stream<span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="w-full p-6">
                    <SelectValue placeholder="Select article type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="container bg-amber-50 mt-[20px] rounded-lg lg:p-1 pl-[12px] p-3 flex md:flex-row flex-col items-center  justify-between gap-2">
              <p className="text-sm text-amber-900 flex lg:items-center pl-3 items-start gap-2 pl-3">
                <FaInfoCircle size={14} className="text-amber-900 " />
                No Mentor details added yet. Click "Add Mentor" to add one.
              </p>
              <Button className="bg-amber-200 text-amber-900 pl-[29px] pr-[29px] hover:bg-white">
                <Plus color="rgba(123, 51, 6, 1)" size={24} /> Add Mentor
              </Button>
            </div>

            <div className="mt-8 lg:mt-8">
              <Label className="pb-2">
                Would you like to assign a DOI to your paper?
                <span className="text-red-500">*</span>
              </Label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* WITHOUT DOI */}
                <label className="cursor-pointer">
                  <div className="relative border rounded-2xl p-6 border-gray-200">
                    {/* Radio */}
                    <input
                      type="radio"
                      name="doi"
                      className="absolute top-4 left-4 w-5 h-5 accent-zinc-700 border-gray-200"
                      defaultChecked
                    />

                    {/* Price */}
                    <p className="absolute top-4 right-4 text-xl font-bold text-gray-900">
                      ₹800/-
                    </p>

                    {/* Title */}
                    <p className="mt-10 mb-4 text-lg font-bold text-gray-900">
                      Without DOI
                    </p>

                    {/* Features */}
                    <div className="space-y-3 text-sm">
                      <p className="flex items-center gap-2 text-gray-600 ">
                        <IoIosPeople size={17} className="text-blue-800" />
                        Max 7 Authors
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <IoDocumentText size={17} className="text-blue-800" />{" "}
                        Max 20 Pages
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <FaCertificate size={17} className="text-green-600" />{" "}
                        E-Certificate (Free)
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <IoClose size={17} className="text-red-500" /> DOI not
                        included <SiDoi size={20} className="text-yellow-500" />
                      </p>
                    </div>
                  </div>
                </label>

                {/* WITH DOI */}
                <label className="cursor-pointer">
                  <div className="relative border rounded-2xl p-6 border-gray-200">
                    {/* Radio */}
                    <input
                      type="radio"
                      name="doi"
                      className="absolute top-4 left-4 w-5 h-5 accent-zinc-700"
                    />

                    {/* Price */}
                    <p className="absolute top-4 right-4 text-xl font-bold text-gray-900">
                      ₹1000/-
                    </p>

                    {/* Title */}
                    <p className="mt-10 mb-4 text-lg font-bold text-gray-900">
                      With DOI
                    </p>

                    {/* Features */}
                    <div className="space-y-3 text-sm">
                      <p className="flex items-center gap-2 text-gray-600 ">
                        <IoIosPeople size={17} className="text-blue-800" />
                        Max 7 Authors
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <IoDocumentText size={17} className="text-blue-800" />{" "}
                        Max 20 Pages
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <FaCertificate size={17} className="text-green-600" />{" "}
                        E-Certificate (Free)
                      </p>

                      <p className="flex items-center gap-2 text-gray-600">
                        <GoLink size={17} className="text-blue-500" /> Digital
                        Object Identifier{" "}
                        <SiDoi size={20} className="text-yellow-500" />
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="container bg-blue-50 mt-[14px] rounded-lg p-3 pl-[12px] flex items-center justify-between">
              <p className="text-sm text-blue-800 flex lg:items-center pl-3 items-start gap-2">
                <FaInfoCircle size={14} className="text-blue-800" />A DOI
                provides a permanent online link to your paper.
              </p>
            </div>
            <div>
              <Label className="lg:mb-2 mt-8 pb-3 lg:mt-8">
                Upload Research Paper <span className="text-red-500">*</span>
              </Label>

              <label
                htmlFor="researchPaper"
                className="
      flex justify-center items-center 
      p-6 border border-dashed rounded-2xl
      cursor-pointer
      bg-white
    "
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    <FaFileArrowUp size={30} className="text-gray-400" />
                  </div>

                  <p className="text-base text-gray-600 mt-2">
                    Click to upload or drag and drop
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    .docx files only (max 5MB)
                  </p>
                </div>
              </label>

              {/* HIDDEN REAL INPUT */}
              <input
                id="researchPaper"
                type="file"
                accept=".docx"
                className="hidden"
              />
            </div>

            <div>
              <Label className="mt-8 pb-2 ">
                Funding Acknowledgement & Grant Lookup
              </Label>
              <span className="text-gray-400 text-sm">
                Was this research project funded?{" "}
                <span className="text-red-500">*</span>
              </span>
              <div className="flex items-center gap-8">
                <label className="flex items-center text-sm pt-[6px] gap-2 text-gray-600">
                  <input
                    type="radio"
                    name="funding"
                    value="yes"
                    className="w-[20px] h-[20px] accent-gray-700 checked:border-zinc-300"
                  />
                  Yes
                </label>

                <label className="flex items-center text-sm pt-[6px] gap-2 text-gray-600">
                  <input
                    type="radio"
                    name="funding"
                    value="no"
                    className="w-[20px] h-[20px] accent-gray-700 checked:border-zinc-300"
                    defaultChecked
                  />
                  No
                </label>
              </div>
            </div>
            <div className=" mt-[27px] rounded-lg p-1 gap-1 flex    justify-end">
              <Checkbox></Checkbox>
              <p className="text-sm text-slate-500">
                <span className="text-red-500 p-2">*</span>I confirm that I have
                read and agree to the{" "}
                <span className="font-bold text-black-800">Privacy Policy</span>{" "}
                and{" "}
                <span className="font-bold text-black-800">
                  Terms & Conditions
                </span>{" "}
                of the journal. I understand that by submitting this article, I
                grant the journal the right to review, publish, and disseminate
                the submitted content as per the{" "}
                <span className="font-bold text-black-800">
                  Publication Ethics.
                </span>
              </p>
            </div>
            <div className="mt-8">
              <Button className="w-full text-base pt-[24px] pb-[24px] bg-indigo-900">
                <GrSend color="white" size={16} />
                Submit Research Paper
              </Button>
            </div>
          </div>

          <div className="lg:w-[384px] w-full  ">
            <div
              className="bg-white w-full rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.05)]
 border  p-[25px]"
            >
              <span className="text-lg font-bold font-style: inter;">
                Submission Guidelines
              </span>
              <span className="text-gray-600 mt-3 flex text-sm ">
                <IoCheckmarkOutline className="mr-3" color="green" size={20} />{" "}
                Ensure your manuscript follows our formatting guidelines
              </span>
              <span className="text-gray-600 mt-3 flex text-sm ">
                <IoCheckmarkOutline className="mr-3" color="green" size={20} />{" "}
                Include proper citations and references
              </span>
              <span className="text-gray-600 mt-3 flex text-sm ">
                <IoCheckmarkOutline className="mr-3" color="green" size={20} />
                Verify all author information is accurate
              </span>
              <span className="text-gray-600 mt-3 flex text-sm ">
                <IoCheckmarkOutline className="mr-3" color="green" size={20} />{" "}
                Double-check your contact details
              </span>

              <div className="bg-blue-50 p-4 mt-6 rounded-lg  ">
                <div className="text-base font-semibold text-blue-900  ">
                  Need Help
                </div>
                <div className="text-sm text-blue-800 pt-2 pb-4 ">
                  Contact our editorial team for assistance
                </div>

                <a
                  href="mailto:editorial@journal.com"
                  className="text-blue-600 text-sm pt-4"
                >
                  editorial@journal.com
                </a>
              </div>
            </div>
            <div className="justify-center flex">
              <div className=" bg-white rounded-2xl   shadow-[0_1px_2px_rgba(0,0,0,0.05)] border  p-[25px] mt-[37px] w-full lg:w-[350px] p-6">
                <span className="text-base  text-black-900 ">Resources</span>
                <div className="pt-[34px]">
                  <Button className="w-full bg-white border border-gray-300 rounded-[8px] pt-[8px] pb-[8px] pl-[1px] pr-[63.5px] text-sm text-black justify-start hover:text-white font-normal gap-[14px]">
                    <FiDownload className="" size={16} />
                    Download Manuscript Template
                  </Button>
                  <Button className="mt-[12px] w-full bg-white border border-gray-300 rounded-[8px] pt-[8px] pb-[8px] pl-[1px] pr-[63.5px] text-sm text-black justify-start hover:text-white font-normal gap-[14px]">
                    <FiDownload className="" size={16} />
                    Author Guidelines (PDF)
                  </Button>
                  <Button className="mt-[12px] w-full bg-white border border-gray-300 rounded-[8px] pt-[8px] pb-[8px] pl-[1px] pr-[63.5px] text-sm text-black justify-start hover:text-white font-normal gap-[14px]">
                    <FiFileText className="" size={16} />
                    Citation Style Guide
                  </Button>
                </div>
              </div>
            </div>
            <div className="justify-center flex mt-4">
              <div className="w-full lg:w-[350px] rounded-2xl border-1 border-blue-200 bg-blue-50 pt-[28px] pb-[28px] pl-[25px] pr-[33px] text-blue-900 text-sm">
                Important: After submission, you will receive a confirmation
                email with your Paper ID. Use this ID to track your manuscript
                status.
              </div>
            </div>
            <div className="justify-center flex mt-4">
              <div className="w-full lg:w-[350px] rounded-2xl border-1 border-amber-200 bg-amber-50 pt-[28px] pb-[28px] pl-[25px] pr-[33px] text-amber-900 text-sm">
                Privacy Note: Your data is protected. We use CAPTCHA
                verification to prevent spam submissions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
