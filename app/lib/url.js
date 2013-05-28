var AppUrl = {
    isDev: true,
    'assessments': function() {
        return this.isDev ? 'https://api.myadnat.co.uk:4443/v1/assessments' : 'https://api.myadnat.co.uk/v1/assessments';
    }
    , 'contact': function() {
        return this.isDev ? 'https://api.myadnat.co.uk:4443/v1/contactrequests' : 'https://api.myadnat.co.uk/v1/contactrequests';
    }
    , 'login': function() {
        return this.isDev ? 'https://auth.myadnat.co.uk:4443/login-touch' : 'https://auth.myadnat.co.uk/login-touch';
    }
};