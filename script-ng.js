var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getLeftPanel', function ($scope, $element) {
  $scope.sections = sectionLeft;
});

GyaanCheckApp.controller('getRightPanel', function ($scope, $element) {
    $scope.sections = sectionRight;
});

var sectionLeft = [
        {
            HeadingTheme: "panel panel-success",
            Title: "Head Constable Dresser Veterinary at Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Advertisement%20HC%20D%20%28VET%29%202015.pdf",
            GoToSite: "http://itbpolice.nic.in/eKiosk/frmRecrtmntAdMain.aspx",
            ApplicationFee: "50",
            PublishedOn: "16/02/2015",
            JobDetails: [{
                Designation: "Head Constable(Dresser Veterinary)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            },
            {
                Designation: "Head Constable(Dresser)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            }
            ]
        },
        {
            HeadingTheme: "panel panel-success",
            Title: "Head Constable Dresser Veterinary at Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Advertisement%20HC%20D%20%28VET%29%202015.pdf",
            GoToSite: "http://itbpolice.nic.in/eKiosk/frmRecrtmntAdMain.aspx",
            ApplicationFee: "50",
            PublishedOn: "16/02/2015",
            JobDetails: [{
                Designation: "Head Constable(Dresser Veterinary)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            },
            {
                Designation: "Head Constable(Dresser)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            }
            ]
        }
];

var sectionRight = [
        {
            HeadingTheme: "panel panel-success",
            Title: "Head Constable Dresser Veterinary at Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Advertisement%20HC%20D%20%28VET%29%202015.pdf",
            GoToSite: "http://itbpolice.nic.in/eKiosk/frmRecrtmntAdMain.aspx",
            ApplicationFee: "50",
            PublishedOn: "16/02/2015",
            JobDetails: [{
                Designation: "Head Constable(Dresser Veterinary)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            },
            {
                Designation: "Head Constable(Dresser)",
                NoOfPosts: "62",
                PayScale: "PB-1 5200 - 20200",
                GradePay: "2400",
                Age: "25",
                Eligibility: "Graduate"
            }
            ]
        }
];