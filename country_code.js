//   country codes script
	

    // Define a map of country codes
    const countryCodes = {
        AF: '+93', // Afghanistan
        AX: '+358', // Åland Islands
		AL: '+355',      // Albania</option>
        DZ: '+213',   //Algeria</option>
		AS:'+1',  //American Samoa</option>
		AD: '+376', //Andorra</option>
		AO: '+244',//Angola</option>
		AI: '+1', //Anguilla</option>
		AQ: '+672',   //Antarctica</option>
		AG:'+1', // Antigua and Barbuda</option>
		AR: '+54',  //Argentina</option>
		AM: '+374', //Armenia</option>
		AW: '+297', //Aruba</option>
		AU: '+61',//Australia</option>
		AT: '+43',// Austria</option>
        AZ: '+994', //>Azerbaijan</option>	
		
		

    BS: '+1-242', // Bahamas
    BH: '+973', // Bahrain
    BD: '+880', // Bangladesh
    BB: '+1-246', // Barbados
    BY: '+375', // Belarus
    BE: '+32', // Belgium
    BZ: '+501', // Belize
    BJ: '+229', // Benin
    BM: '+1-441', // Bermuda
    BT: '+975', // Bhutan
    BO: '+591', // Bolivia
    BA: '+387', // Bosnia and Herzegovina
    BW: '+267', // Botswana
    BR: '+55', // Brazil
    IO: '+246', // British Indian Ocean Territory
    VG: '+1-284', // British Virgin Islands
    BN: '+673', // Brunei
    BG: '+359', // Bulgaria
    BF: '+226', // Burkina Faso
    BI: '+257', // Burundi
    KH: '+855', // Cambodia
    CM: '+237', // Cameroon
    CA: '+1', // Canada
    CV: '+238', // Cape Verde
    KY: '+1-345', // Cayman Islands
    CF: '+236', // Central African Republic
    TD: '+235', // Chad
    CL: '+56', // Chile
    CN: '+86', // China
    CX: '+61', // Christmas Island
    CC: '+61', // Cocos Islands
    CO: '+57', // Colombia
    KM: '+269', // Comoros
    CK: '+682', // Cook Islands
    CR: '+506', // Costa Rica
    HR: '+385', // Croatia
    CU: '+53', // Cuba
    CW: '+599', // Curacao
    CY: '+357', // Cyprus
    CZ: '+420', // Czech Republic
    CD: '+243', // Democratic Republic of the Congo
    DK: '+45', // Denmark
    DJ: '+253', // Djibouti
    DM: '+1-767', // Dominica
	DO: ['+1-809', '+1-829', '+1-849'], // Dominican Republic
    TL: '+670', // East Timor
	
    EG: '+20', // Egypt
    FR: '+33', // France
    GA: '+241', // Gabon
    DE: '+49', // Germany
	
	GA: '+241', // Gabon
    DE: '+49', // Germany
    GH: '+233', // Ghana
    GR: '+30', // Greece
    HU: '+36', // Hungary
    IN: '+91', // India
    IT: '+39', // Italy
    JP: '+81', // Japan
    KE: '+254', // Kenya
    KR: '+82', // South Korea
    MX: '+52', // Mexico
    NL: '+31', // Netherlands
    NG: '+234', // Nigeria
    NO: '+47', // Norway
    PK: '+92', // Pakistan
    PL: '+48', // Poland
    PT: '+351', // Portugal
    RO: '+40', // Romania
    RU: '+7', // Russia
    SA: '+966', // Saudi Arabia
    SG: '+65', // Singapore
    ZA: '+27', // South Africa
    ES: '+34', // Spain
    SE: '+46', // Sweden
    CH: '+41', // Switzerland
    TR: '+90', // Turkey
    UA: '+380', // Ukraine
    AE: '+971', // United Arab Emirates
    GB: '+44', // United Kingdom
    US: '+1', // United States
    UY: '+598', // Uruguay
    VE: '+58', // Venezuela
    VN: '+84', // Vietnam
    ZM: '+260', // Zambia
    ZW: '+263', // Zimbabwe
 
    

};

    // Get the select element
    const countrySelect = document.getElementById('country');
    const mobileInput = document.getElementById('mobile');

    // Add an event listener to the select element
    countrySelect.addEventListener('change', () => {
        const selectedCountry = countrySelect.value;
        const countryCode = countryCodes[selectedCountry];
        mobileInput.value = countryCode; // Set the input value
    });

