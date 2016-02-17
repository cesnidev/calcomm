'use strict';

var eventica = angular.module('Client');
eventica.controller('IndexCtrl', function($scope,$window,$rootScope,EventicaConfig) {

	$scope.profile = {"waist": "", "jacketsize": "", "chest": "","hips":"","dressize":"","waistfemale":"","nflanguage":"","slanguage":"", "piercings": false, "tatoos": false, "englishfuently": false, "englishacent": false};
	$scope.legal={"licensev":false,"ownmb":false,"apitm":false,"days":false,"cmdays":false,"cmmonths":false,"sshift":false,"lshift":false,"mshift":false,"ashift":false,"lmshift":false,"hshift":false,"bshift":false};
	$scope.experience={"tabcertified": false, "xptech": false, "capinfo": false, "xpsocial": false, "emodeling": false, "flashmg": false, "tradeshow": false, "sampling": false, "indoor": false, "driving": false, "hostess": false, "promos": false, "techp": false, "streeteam": false, "demostore": false, "natours": false, "liquor": false, "outdoor": false, "costume": false, "setbd": false, "retailsales": false, "bambass": false, "teaml": false, "emcee": false, "model": false, "driver": false};
	$scope.availability = {"licensev":false,"ownmb":false,"apitm":false,"days":false,"cmdays":false,"cmmonths":false,"sshift":false,"lshift":false,"mshift":false,"ashift":false,"lmshift":false,"hshift":false,"bshift":false};
	
	var currentTime = new Date();
	$scope.currentTime = currentTime;
	$scope.month = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	$scope.weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$scope.weekdaysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
	$scope.minDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * 365 * EventicaConfig.Max_Age ))).toISOString();
	$scope.maxDate = (new Date($scope.currentTime.getTime() - ( 1000 * 60 * 60 *24 * 365 * EventicaConfig.Min_Age ))).toISOString();

	$scope.states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
	$scope.relation = ["Mother","Father","Grand Parent","Brother","Sister","Child","Friend","Aunt","Uncle","Partner"];
	$scope.heights = ["4'10","4'11","4'12","5'0","5'1","5'2","5'3","5'4","5'5","5'6","5'7","5'8","5'9","5'10","5'11","5'12","6'0","6'1","6,2","6'3","6'4","6'5","6'6","6'7","6'8","6'9","6'10","6'11","6'12"];
	$scope.eyecolor=["Blue","Brown","Green","Hazel","Gray"];
	$scope.haircolor=["Auburn","Black","Blonde","Brunette","Other"];
	$scope.hairlength=["Short","Medium","Long","Bald"];
	$scope.tshirt=["XS","S","M","L","XL","XXL+"];
	$scope.cesni=["5","5.5","6","6.5","7","7.5","8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13","13.5","14","14+"];
	$scope.cesni=["36","38","40","42","44","46","48","50"];
	$scope.cesni=["28","30","32","34","36","38","40","42"];
	$scope.cesni=["24","25","26","27","28","29","30","31","32","33","34+"];
	$scope.cesni=["33","34","35","36","37","38","39","40","41","42","43","44+"];
	$scope.cesni=["0","2","4","6","8","10","12+"];
	$scope.cesni=["English","Spanish","French","German","Italian","Portuguese","Russian","Chinese"];
	$scope.cesni=["0","10-25","25-50","50-100","100+"];
	$scope.cesni=["Just Getting Started","Less than a year","1-3 years","3-5 years","5 years or more"];
	$scope.cesni=["0","1-5","6-10","More than 10"];
	$scope.cesni=["High School","Associate Degree","Bachelors Degree","Masters Degree","Ph. D.","Other"];
	/* END INITS*/

});
	