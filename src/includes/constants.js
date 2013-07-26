var Constants = function() {

	var baseUrl = "http://luxbot.net/bot/";
	
	return {

		  baseUrl     : baseUrl + 'luxbot.php?'
		, downloadUrl : baseUrl + 'luxbot.user.js'
		, versionUrl  : baseUrl + 'luxbot.version.php'
		
		, gitHtml  : 'https://raw.github.com/DonatoB/tofu/master/server/html/'
		
		, statsdesc : {0:'Strike Action', 1:'Defensive Action', 2:'Spy Rating', 3:'Sentry Rating', 4:'Gold'}

		, storedStrings : ['race',  'kocnick', 'forumName', 'forumPass', 'auth', 'logself']

		, storedNumbers :['kocid', 'tff', 'income', 'sa', 'da', 'spy', 'sentry', 'spyWeaps', 'sentryWeaps', 'daWeaps', 'saWeaps']
		
		, spyWeaps : ['Rope','Dirk','Cloak','Grappling Hook','Skeleton Key','Nunchaku']
		
		, sentryWeaps : ['Big Candle','Horn','Tripwire','Guard Dog','Lookout Tower']
		
		, daWeaps : ['Helmet', 'Shield','Chainmail','Plate Armor', 'Mithril', 'Elven Cloak', 'Gauntlets', 'Heavy Shield', 'Dragonskin', 'Invisibility Shield' ]
		
		, options : [ 'logself', 'scrollbattlelog', 'turnclock', 'commandCenterStats', 'targets', 'fakesabtargets', 'goldprojection', 'armorygraph', 'armorydiff']
	}

}();
