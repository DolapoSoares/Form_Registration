import React from "react";
import { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RadioGroup from "./RadioGroup";
import RadiotableGroup from "./RadiotableGroup";
import ReCAPTCHA from "react-google-recaptcha";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState({ isoCode: "" });
  const [selectedState, setSelectedState] = useState({
    countryCode: "",
    isoCode: "",
  });
  const [selectedCity, setSelectedCity] = useState(null);
  const [value, setValue] = useState(new Date());

  const Category = [
    { label: "Housing Society", value: "Housing Society" },
    { label: "Corporate Office", value: "Corporate Office" },
    { label: "Retail Center", value: "Retail Center" },
    { label: "Warehouse", value: "Warehouse" },
    { label: "Factory", value: "Factory" },
    { label: "Shopping Mall", value: "Shopping Mall" },
    { label: "Hotels", value: "Hotels" },
    { label: "Hospital", value: "Hospital" },
    { label: "Resort", value: "Resort" },
    { label: "Industry", value: "Industry" },
    { label: "Government", value: "Government" },
    { label: "University", value: "University" },
  ];

  const Solution = [
    { label: "Full Package", value: "Full Package" },
    { label: "As Per Services", value: "As Per Services" },
  ];

  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

  useEffect(() => {
    console.log(selectedCountry);
  }, [selectedCountry]);

  return (
    <div>
      <h2 className="text-center my-5">Register for Activation of Subscription</h2>

      <form className="flex flex-col  relative w-11/12">
        <div className="flex flex-row mx-10 my-5">
          Select Country:
          <Select
            options={Country.getAllCountries()}
            getOptionLabel={(options: any) => {
              return options["name"];
            }}
            getOptionValue={(options: any) => {
              return options["name"];
            }}
            value={selectedCountry}
            onChange={(item: any) => {
              setSelectedCountry(item);
              console.log(selectedCountry);
            }}
          />
        </div>
        <div className="mx-10 my-5">
          <p>
            Set your Password <input className="border " type="text" />
          </p>
        </div>
        <div className="mx-10 my-5">
          <p>
            First Name
            <input required className="border" type="text" />
          </p>
        </div>
        <div className="mx-10 my-5">
          <p>
            Middle Name <input className="border " type="text" />
          </p>
        </div>
        <div className="mx-10 my-5">
          <p>
            Last Name <input className="border " type="text" />
          </p>
        </div>
        <div className="mx-10 my-5">
          <p>
            Phone Number <input className="border " type="tel" />
          </p>
        </div >
        <div className="flex flex-col mx-10 my-5">
           
           
          <div  className="flex">
            <p>Address </p>
          <div>
            <p>
              Property No
              <input required className="border" type="text" />
            </p>
          </div>
            <p>
              Street Name <input required className="border" type="text" />
            </p>
            <p className="flex flex-row relative">
              Select State
              <Select
                options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                getOptionLabel={(options: any) => {
                  return options["name"];
                }}
                getOptionValue={(options: any) => {
                  return options["name"];
                }}
                value={selectedState}
                onChange={(item: any) => {
                  setSelectedState(item);
                }}
              />
            </p>
          </div>
          <div className="flex flex-row relative">
            <p className="flex flex-row relative">
              Select City
              <Select
                options={City?.getCitiesOfState(
                  selectedState?.countryCode,
                  selectedState?.isoCode
                )}
                getOptionLabel={(options: any) => {
                  return options["name"];
                }}
                getOptionValue={(options) => {
                  return options["name"];
                }}
                value={selectedCity}
                onChange={(item) => {
                  setSelectedCity(item);
                }}
              />
              </p>
            <p>
              Landmark <input required className="border" type="text" />
            </p>
            <p>
              Zip Code <input required className="border" type="text" />
            </p>
          </div>
        </div>
        <div className="flex flex-row mx-10 my-5">
          <p>
            Business Name 
          </p>
          <input required className="border" type="text" />
        </div>
        <div className="mx-10 my-5">
          <div className="flex flex-row">
            <p>Category Type</p>
            <Select options={Category} />
          </div>
          <p>
            If other Please Specify{" "}
            <input required className="border" type="text" />
          </p>
        </div>
        <div className="mx-10 my-5">
          <p>Provide Date and Month for activation </p>
          <DatePicker
            onChange={(date: any) => {
              setValue(date);
            }}
            selected={value}
          />
        </div>
        <div className="flex flex-row mx-10 my-5">
          <p>Timing Schedule</p>
          <div>
            <RadioGroup />
          </div>
        </div>
        <div className="flex flex-row mx-10 my-5">
            <p>Select Solution</p>
            <Select options={Solution} />
        </div>
        <div className="mx-10 my-5">
          <RadiotableGroup />
        </div>
        <div className=" flex flex-row mx-10 my-5">
          <p>Referral Code</p>
          <input required className="border" type="text" />
        </div>
        <div className="flex flex-row mx-10 my-5">
          <p>Captcha</p>
          <div>
                <ReCAPTCHA
                  sitekey="6Lc7SOseAAAAAHBh-joEdg_fmL4wiJXVW8h3lUIU"
                />
              </div>
        </div>
        <div className="text-center my-5">
          <button className="bg-sky-500 hover:bg-sky-700">Submit</button>
        </div>
      </form>
    </div>
  );
}
