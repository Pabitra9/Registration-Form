import React from "react";
import Country from './Country'
import { useState } from "react";
const countries = [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}, 
  {name: 'Brunei Darussalam', code: 'BN'}, 
  {name: 'Bulgaria', code: 'BG'}, 
  {name: 'Burkina Faso', code: 'BF'}, 
  {name: 'Burundi', code: 'BI'}, 
  {name: 'Cambodia', code: 'KH'}, 
  {name: 'Cameroon', code: 'CM'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'Cape Verde', code: 'CV'}, 
  {name: 'Cayman Islands', code: 'KY'}, 
  {name: 'Central African Republic', code: 'CF'}, 
  {name: 'Chad', code: 'TD'}, 
  {name: 'Chile', code: 'CL'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Christmas Island', code: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
  {name: 'Colombia', code: 'CO'}, 
  {name: 'Comoros', code: 'KM'}, 
  {name: 'Congo', code: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
  {name: 'Cook Islands', code: 'CK'}, 
  {name: 'Costa Rica', code: 'CR'}, 
  {name: 'Cote D\'Ivoire', code: 'CI'}, 
  {name: 'Croatia', code: 'HR'}, 
  {name: 'Cuba', code: 'CU'}, 
  {name: 'Cyprus', code: 'CY'}, 
  {name: 'Czech Republic', code: 'CZ'}, 
  {name: 'Denmark', code: 'DK'}, 
  {name: 'Djibouti', code: 'DJ'}, 
  {name: 'Dominica', code: 'DM'}, 
  {name: 'Dominican Republic', code: 'DO'}, 
  {name: 'Ecuador', code: 'EC'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'El Salvador', code: 'SV'}, 
  {name: 'Equatorial Guinea', code: 'GQ'}, 
  {name: 'Eritrea', code: 'ER'}, 
  {name: 'Estonia', code: 'EE'}, 
  {name: 'Ethiopia', code: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
  {name: 'Faroe Islands', code: 'FO'}, 
  {name: 'Fiji', code: 'FJ'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'French Guiana', code: 'GF'}, 
  {name: 'French Polynesia', code: 'PF'}, 
  {name: 'French Southern Territories', code: 'TF'}, 
  {name: 'Gabon', code: 'GA'}, 
  {name: 'Gambia', code: 'GM'}, 
  {name: 'Georgia', code: 'GE'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Ghana', code: 'GH'}, 
  {name: 'Gibraltar', code: 'GI'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Greenland', code: 'GL'}, 
  {name: 'Grenada', code: 'GD'}, 
  {name: 'Guadeloupe', code: 'GP'}, 
  {name: 'Guam', code: 'GU'}, 
  {name: 'Guatemala', code: 'GT'}, 
  {name: 'Guernsey', code: 'GG'}, 
  {name: 'Guinea', code: 'GN'}, 
  {name: 'Guinea-Bissau', code: 'GW'}, 
  {name: 'Guyana', code: 'GY'}, 
  {name: 'Haiti', code: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
  {name: 'Holy See (Vatican City State)', code: 'VA'}, 
  {name: 'Honduras', code: 'HN'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'Hungary', code: 'HU'}, 
  {name: 'Iceland', code: 'IS'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Iraq', code: 'IQ'}, 
  {name: 'Ireland', code: 'IE'}, 
  {name: 'Isle of Man', code: 'IM'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Jamaica', code: 'JM'},


  {name: 'Japan', code: 'JP'}, 
  {name: 'Jersey', code: 'JE'}, 
  {name: 'Jordan', code: 'JO'}, 
  {name: 'Kazakhstan', code: 'KZ'}, 
  {name: 'Kenya', code: 'KE'}, 
  {name: 'Kiribati', code: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Kuwait', code: 'KW'}, 
  {name: 'Kyrgyzstan', code: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
  {name: 'Latvia', code: 'LV'}, 
  {name: 'Lebanon', code: 'LB'}, 
  {name: 'Lesotho', code: 'LS'}, 
  {name: 'Liberia', code: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
  {name: 'Liechtenstein', code: 'LI'}, 
  {name: 'Lithuania', code: 'LT'}, 
  {name: 'Luxembourg', code: 'LU'}, 
  {name: 'Macao', code: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
  {name: 'Madagascar', code: 'MG'}, 
  {name: 'Malawi', code: 'MW'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Maldives', code: 'MV'}, 
  {name: 'Mali', code: 'ML'}, 
  {name: 'Malta', code: 'MT'}, 
  {name: 'Marshall Islands', code: 'MH'}, 
  {name: 'Martinique', code: 'MQ'}, 
  {name: 'Mauritania', code: 'MR'}, 
  {name: 'Mauritius', code: 'MU'}, 
  {name: 'Mayotte', code: 'YT'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Micronesia, Federated States of', code: 'FM'}, 
  {name: 'Moldova, Republic of', code: 'MD'}, 
  {name: 'Monaco', code: 'MC'}, 
  {name: 'Mongolia', code: 'MN'}, 
  {name: 'Montserrat', code: 'MS'}, 
  {name: 'Morocco', code: 'MA'}, 
  {name: 'Mozambique', code: 'MZ'}, 
  {name: 'Myanmar', code: 'MM'}, 
  {name: 'Namibia', code: 'NA'}, 
  {name: 'Nauru', code: 'NR'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Netherlands Antilles', code: 'AN'}, 
  {name: 'New Caledonia', code: 'NC'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Nicaragua', code: 'NI'}, 
  {name: 'Niger', code: 'NE'}, 
  {name: 'Nigeria', code: 'NG'}, 
  {name: 'Niue', code: 'NU'}, 
  {name: 'Norfolk Island', code: 'NF'}, 
  {name: 'Northern Mariana Islands', code: 'MP'}, 
  {name: 'Norway', code: 'NO'}, 
  {name: 'Oman', code: 'OM'}, 
  {name: 'Pakistan', code: 'PK'}, 
  {name: 'Palau', code: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
  {name: 'Panama', code: 'PA'}, 
  {name: 'Papua New Guinea', code: 'PG'}, 
  {name: 'Paraguay', code: 'PY'}, 
  {name: 'Peru', code: 'PE'}, 
  {name: 'Philippines', code: 'PH'}, 
  {name: 'Pitcairn', code: 'PN'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Puerto Rico', code: 'PR'}, 
  {name: 'Qatar', code: 'QA'}, 
  {name: 'Reunion', code: 'RE'}, 
  {name: 'Romania', code: 'RO'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'RWANDA', code: 'RW'}, 
  {name: 'Saint Helena', code: 'SH'}, 
  {name: 'Saint Kitts and Nevis', code: 'KN'}, 
  {name: 'Saint Lucia', code: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
  {name: 'Samoa', code: 'WS'}, 
  {name: 'San Marino', code: 'SM'}, 
  {name: 'Sao Tome and Principe', code: 'ST'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Senegal', code: 'SN'}, 
  {name: 'Serbia and Montenegro', code: 'CS'}, 
  {name: 'Seychelles', code: 'SC'}, 
  {name: 'Sierra Leone', code: 'SL'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'Slovakia', code: 'SK'}, 
  {name: 'Slovenia', code: 'SI'}, 
  {name: 'Solomon Islands', code: 'SB'}, 
  {name: 'Somalia', code: 'SO'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Sudan', code: 'SD'}, 
  {name: 'Suriname', code: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Syrian Arab Republic', code: 'SY'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'Tajikistan', code: 'TJ'}, 
  {name: 'Tanzania, United Republic of', code: 'TZ'},

  {name: 'Thailand', code: 'TH'}, 
  {name: 'Timor-Leste', code: 'TL'}, 
  {name: 'Togo', code: 'TG'}, 
  {name: 'Tokelau', code: 'TK'}, 
  {name: 'Tonga', code: 'TO'}, 
  {name: 'Trinidad and Tobago', code: 'TT'}, 
  {name: 'Tunisia', code: 'TN'}, 
  {name: 'Turkey', code: 'TR'}, 
  {name: 'Turkmenistan', code: 'TM'}, 
  {name: 'Turks and Caicos Islands', code: 'TC'}, 
  {name: 'Tuvalu', code: 'TV'}, 
  {name: 'Uganda', code: 'UG'}, 
  {name: 'Ukraine', code: 'UA'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'United States Minor Outlying Islands', code: 'UM'}, 
  {name: 'Uruguay', code: 'UY'}, 
  {name: 'Uzbekistan', code: 'UZ'}, 
  {name: 'Vanuatu', code: 'VU'}, 
  {name: 'Venezuela', code: 'VE'}, 
  {name: 'Viet Nam', code: 'VN'}, 
  {name: 'Virgin Islands, British', code: 'VG'}, 
  {name: 'Virgin Islands, U.S.', code: 'VI'}, 
  {name: 'Wallis and Futuna', code: 'WF'}, 
  {name: 'Western Sahara', code: 'EH'}, 
  {name: 'Yemen', code: 'YE'}, 
  {name: 'Zambia', code: 'ZM'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
]

function App() {

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="font-roboto bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md shadow-gray">
            <div className="bg-chrmpBlue rounded-md">
              
            <h2 className="text-2xl font-semibold mb-4 font-open-sans text-left p-2 text-chrmpWhite">CHRMP Academy Registration Form</h2>
            </div>

            <form action="#" method="POST">
                {/* <!-- Personal Information Section --> */}
                <section className="mb-6">
                    {/* <!-- <h3 className="text-xl font-semibold mb-2 font-open-sans">Personal Information</h3> --> */}
                    {/* <!-- Name Field --> */}
                    <div className="mb-4">
                        <label for="name" className="block text-[#5D6572] font-semibold mb-2 text-sm">Full Name <span className="text-[#ff0000]">*</span></label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] focus:shadow-outline transition-all duration-75 ease-linear" placeholder="Enter Your Full Name" required/>
                    </div>

                    
                    {/* <!-- Date of Birth Field --> */}
                    <div className="mb-4">
                        <label for="dob" className="block text-[#5D6572] font-semibold mb-2 text-sm">Date of Birth *</label>
                        <input type="date" id="dob" name="dob" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required/>
                    </div>
    
                    {/* <!-- Email Field --> */}
                    <div className="mb-4">
                        <label for="email" className="block text-[#5D6572] font-semibold mb-2 text-sm">Email <span className="text-[#ff0000]">*</span></label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Enter Your Email" required/>
                    </div>
    
                    {/* <!-- Phone Field --> */}
                    <div className="mb-4">
                        <label for="phone" className="block text-[#5D6572] font-semibold mb-2 text-sm">Phone <span className="text-[#ff0000]">*</span></label>
                        <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="123-456-7890" required/>
                    </div>

                    {/* <!-- Phone Field --> */}
                    <div className="mb-4">
                        <label for="phone" className="block text-[#5D6572] font-semibold mb-2 text-sm">Alternative Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="123-456-7890" required/>
                    </div>
    
                    {/* <!-- Gender Field --> */}
                    <div className="mb-4">
                        <label for="gender" className="block text-[#5D6572] font-semibold mb-2 text-sm">Gender <span className="text-[#ff0000]">*</span></label>
                        <select id="gender" name="gender" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required>
                            <option value="select" selected disabled>-Select-</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="dont-say">Don't Want to Say</option>
                        </select>
                    </div>
                </section>

                {/* <!-- Personal Address Section --> */}
                <section className="mb-6">
                    <h3 className="text-xl text-[#5D6572] font-semibold mb-2 border-b border-chrmpBlue font-open-sans ">Personal Address</h3>
                    {/* <!-- Street Address Field --> */}
                    <div className="mb-4">
                        <label for="streetAddress" className="block text-[#5D6572] font-semibold mb-2 text-sm">Street Address</label>
                        <input type="text" id="streetAddress" name="streetAddress" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="123 Main St"/>
                    </div>
    
                    {/* <!-- Address Line 2 Field --> */}
                    <div className="mb-4">
                        <label for="addressLine2" className="block text-[#5D6572] font-semibold mb-2 text-sm">Address Line 2</label>
                        <input type="text" id="addressLine2" name="addressLine2" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Apt 4B"/>
                    </div>
    
                    {/* <!-- City, State, Zipcode Fields --> */}
                    <div className="mb-4 md:flex">
                        <div className="md:w-1/3 mb-4 mr-2 md:mb-0">
                            <label for="city" className="block text-[#5D6572] font-semibold mb-2 text-sm">City</label>
                            <input type="text" id="city" name="city" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="City"/>
                        </div>
                        <div className="md:w-1/3 mb-4 mr-2 md:mb-0">
                            <label for="state" className="block text-[#5D6572] font-semibold mb-2 text-sm">State</label>
                            <input type="text" id="state" name="state" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="State"/>
                        </div>
                        <div className="md:w-1/3 mr-2">
                            <label for="zipcode" className="block text-[#5D6572] font-semibold mb-2 text-sm">Zipcode</label>
                            <input type="text" id="zipcode" name="zipcode" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Zipcode"/>
                        </div>
                    </div>

                     {/* <!-- Country Field --> */}
                     <div className="mb-4">
                        <label for="addressLine2" className="block text-[#5D6572] font-semibold mb-2 text-sm">Country</label>
                        <Country countries={countries} onChange={handleCountryChange}/>       
                    </div>
                </section>
    
                {/* <!-- Program Details Section --> */}
                <section className="mb-6">
                    <h3 className="text-xl text-[#5D6572] font-semibold mb-2 border-b border-chrmpBlue font-open-sans">Program Details</h3>
                    {/* <!-- Certification Program Field --> */}
                    <div className="mb-4">
                        <label for="certificationProgram" className="block text-[#5D6572] font-semibold mb-2 text-sm">Certification Program Enroll for <span className="text-[#ff0000]">*</span></label>
                        <select id="certificationProgram" name="certificationProgram" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required>
                    <option value="" selected disabled >-Select-</option>
                    <option value="CHRMP Foundation" >CHRMP Foundation</option>
                    <option value="HRBP Advanced" >HRBP Advanced</option>
                    <option value="HR Analytics" >HR Analytics</option>
                    <option value="CHRMP BEI" >CHRMP BEI</option>
                    <option value="CHRMP Competency Mapping" >CHRMP Competency Mapping</option>
                    <option value="CHRMP Talent Acquisition" >CHRMP Talent Acquisition</option>
                    <option value="CHRMP Talent Development" >CHRMP Talent Development</option>
                    <option value="Dual (Foundation + HRA)" >Dual (Foundation + HRA)</option>
                    <option value="Dual (HRBP + HRA)" >Dual (HRBP + HRA)</option>
                    <option value="CHRMP Tableau for HR" >CHRMP Tableau for HR</option>
                    <option value="C&B Planning" >C&B Planning</option>
                    <option value="Generative AI in HR" >Generative AI in HR</option>
                    <option value="PoSH" >PoSH</option>
                        </select>
                    </div>
    
                    {/* <!-- Date of Registration Field --> */}
                    <div className="mb-4">
                        <label for="registrationDate" className="block text-[#5D6572] font-semibold mb-2 text-sm">Date of Registration <span className="text-[#ff0000]">*</span></label>
                        <input type="date" id="registrationDate" name="registrationDate" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required/>
                    </div>
                </section>
    
                {/* <!-- Education Qualification & Experience Section --> */}
                <section className="mb-6">
                    <h3 className="text-xl text-[#5D6572] font-semibold mb-2 border-b border-chrmpBlue font-open-sans">Education Qualification & Experience</h3>
                    {/* <!-- Education Field --> */}
                    <div className="mb-4">
                        <label for="education" className="block text-[#5D6572] font-semibold mb-2 text-sm">Education <span className="text-[#ff0000]">*</span></label>
                        <input type="text" id="education" name="education" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Your Education" required/>
                    </div>
    
                    {/* <!-- Total Year of Experience Field --> */}
                    <div className="mb-4">
                        <label for="totalExperience" className="block text-[#5D6572] font-semibold mb-2 text-sm">Total Year of Experience <span className="text-[#ff0000]">*</span></label>
                        <input type="number" id="totalExperience" name="totalExperience" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Total Experience" required/>
                    </div>
    
                    {/* <!-- Relevant Experience in HR Field --> */}
                    <div className="mb-4">
                        <label for="hrExperience" className="block text-[#5D6572] font-semibold mb-2 text-sm">Relevant Experience in HR <span className="text-[#ff0000]">*</span></label>
                        <select id="hrExperience" name="hrExperience" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required>
                            <option value="select" selected disabled>-Select-</option>
                            <option value="0-3">0-3</option>
                            <option value="3-5">3-5</option>
                            <option value="5-7">5-7</option>
                            <option value="7 & Above">7 & Above</option>
                        </select>
                    </div>
    
                    {/* <!-- Previous Organization Name Field --> */}
                    <div className="mb-4">
                        <label for="prevOrg" className="block text-[#5D6572] font-semibold mb-2 text-sm">Previous Organization Name <span className="text-[#ff0000]">*</span></label>
                        <input type="text" id="prevOrg" name="prevOrg" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Previous Organization" required/>
                    </div>
    
                    {/* <!-- Current Organization Field --> */}
                    <div className="mb-4">
                        <label for="currentOrg" className="block text-[#5D6572] font-semibold mb-2 text-sm">Current Organization <span className="text-[#ff0000]">*</span></label>
                        <input type="text" id="currentOrg" name="currentOrg" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Current Organization" required/>
                    </div>
    
                    {/* <!-- Designation Field --> */}
                    <div className="mb-4">
                        <label for="designation" className="block text-[#5D6572] font-semibold mb-2 text-sm">Designation <span className="text-[#ff0000]">*</span></label>
                        <input type="text" id="designation" name="designation" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Your Designation" required/>
                    </div>
    
                    {/* <!-- LinkedIn Profile URL Field --> */}
                    <div className="mb-4">
                        <label for="linkedin" className="block text-[#5D6572] font-semibold mb-2 text-sm">Your LinkedIn Profile URL <span className="text-[#ff0000]">*</span></label>
                        <input type="url" id="linkedin" name="linkedin" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="https://linkedin.com/in/yourprofile" required/>
                    </div>
    
                    {/* <!-- How Did You Find Us Field --> */}
                    <div className="mb-4">
                        <label for="howFound" className="block text-[#5D6572] font-semibold mb-2 text-sm">How Did You Find Us? <span className="text-[#ff0000]">*</span></label>
                        <select id="howFound" name="howFound" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required>
                            <option value="select" selected disabled>-Select-</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Google">Google</option>
                            <option value="LinkedIn">LinkedIn</option>
                            <option value="Webinar">Webinar</option>
                            <option value="Email">Email</option>
                            <option value="Friend Referral">Friend Referral</option>
                        </select>
                    </div>
    
                    {/* <!-- Image Upload Field --> */}
                    <div className="mb-4">
                        <label for="image" className="block text-[#5D6572] font-semibold mb-2 text-sm">Image Upload <span className="text-[#ff0000]">*</span></label>
                        <input type="file" id="image" name="image" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required/>
                    </div>
    
                    {/* <!-- Your Id Proof Field --> */}
                    <div className="mb-4">
                        <label for="idProof" className="block text-[#5D6572] font-semibold mb-2 text-sm">Your Id Proof <span className="text-[#ff0000]">*</span></label>
                        <input type="file" id="idProof" name="idProof" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" required/>
                    </div>
    
                    {/* <!-- Certification Number Field --> */}
                    <div className="mb-4">
                        <label for="certificationNumber" className="block text-[#5D6572] font-semibold mb-2 text-sm">Certification Number</label>
                        <input type="text" id="certificationNumber" name="certificationNumber" className="w-full px-3 py-2 border-[#E2E8F0] border-[1px] rounded-md focus:outline-none focus:outline-4 focus:outline-[#bfd3e8] transition-all duration-75 ease-linear" placeholder="Your Certification Number"/>
                        <p className="block text-[#5D6572] font-semibold mb-2 text-sm">Not Required While Registration</p>
                    </div>
                </section>
    
                {/* <!-- Submit Button --> */}
                <div className="mt-6">
                    <button type="submit" className="bg-chrmpBlue hover:bg-chrmpGreen text-chrmpWhite py-2 px-4 rounded-md focus:outline-none transition duration-300 ease-in-out">Submit</button>
                </div>
                
            </form>
        </div>
    


    </div>
  );
}

export default App;
