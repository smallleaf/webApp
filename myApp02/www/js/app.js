var app = angular.module('myApp', ['ionic','myApp.controllers']);

app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {

		$ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

	$stateProvider
		.state('mainTabs',{
			url:"/mainTabs",
			abstract:true,
			templateUrl:"templates/mainTabs.html"
		})
		.state('mainTabs.home',{
			url:"/home",
			views:{
				'Home-tab':{
					templateUrl:"templates/home_tab.html",
					controller:"homeController"
				}
			}
		})
		.state('mainTabs.about',{
			url:"/about",
			views:{
				'About-tab':{
					templateUrl:"templates/about_tab.html"
					//controller:"aboutController"
				}
			}
		})
		.state('mainTabs.setting',{
			url:"/setting",
			views:{
				'Settings-tab':{
					templateUrl:"templates/setting_tab.html"
					//controller:"settingController"
				}
			}
		})
		 // if none of the above states are matched, use this as the fallback
 		 $urlRouterProvider.otherwise('/mainTabs/home');
})