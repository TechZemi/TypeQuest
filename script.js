(function(window, document, $){

	var ゲーム内容 = [
		{ 
			"モード" : "初級"
			, "一定時間で落ちるペース" : {
				"秒毎に" : 4
				, "ずつ落ちる" : 5
			}
			, "間違えた時のペナルティ" : 5
			, "一つクリアした毎のボーナス" : 10
			, "プレイ中の画像" : "fantasy_witch.png"
			, "クリア時の画像" : "majo_girl_majokko.png"
			, "ゲームオーバー時の画像" : "tobikomi.png"
			, "ローマ字を表示する" : true
			, "キー位置を表示する" : true
			, "課題" : [
				[
					{ "label" : "く" }
					, { "label" : "じ" }
					, { "label" : "ら" }
				]
				, [
					{ "label" : "メ", "value" : ["め"] }
					, { "label" : "ー", "value" : ["ー"] }
					, { "label" : "ル", "value" : ["る"] }
				]
				, [
					{ "label" : "い" }
					, { "label" : "ち" }
					, { "label" : "ご" }
				]
				, [
					{ "label" : "め" }
					, { "label" : "か" }
					, { "label" : "ぶ" }
				]
				, [
					{ "label" : "ラ", "value" : [ "ら" ] }
					, { "label" : "ッ", "value" : ["っ"] }
					, { "label" : "パ", "value" : ["ぱ"] }
				]
				, [
					{ "label" : "ゴ", "value" : [ "ご" ] }
					, { "label" : "ジ", "value" : ["じ"] }
					, { "label" : "ラ", "value" : ["ら"] }
				]
				, [
					{ "label" : "み" }
					, { "label" : "か" }
					, { "label" : "ん" }
				]
				, [
					{ "label" : "野", "value" : [ "や" ] }
					, { "label" : "球", "value" : ["きゅ", "う"] }
				]
				, [
					{ "label" : "若", "value" : ["わ", "か"] }
					, { "label" : "葉", "value" : ["ば"] }
				]
				, [
					{ "label" : "大", "value" : ["だ", "い"] }
					, { "label" : "豆", "value" : ["ず"] }
				]
				, [
					{ "label" : "火", "value" : ["か"] }
					, { "label" : "星", "value" : ["せ", "い"] }
				]
				, [
					{ "label" : "ぶ" }
					, { "label" : "ど" }
					, { "label" : "う" }
				]
			]
		}
		, { 
			"モード" : "中級" 
			, "一定時間で落ちるペース" : {
				"秒毎に" : 3
				, "ずつ落ちる" : 5
			}
			, "間違えた時のペナルティ" : 5
			, "一つクリアした毎のボーナス" : 5
			, "プレイ中の画像" : "fantasy_witch.png"
			, "クリア時の画像" : "majo_girl_majokko.png"
			, "ゲームオーバー時の画像" : "tobikomi.png"
			, "ローマ字を表示する" : true
			, "キー位置を表示する" : false
			, "課題" : [
				[
					{ "label" : "秋刀魚", "value" : [ "さ", "ん", "ま"] }
				]
				, [
					{ "label" : "と" }
					, { "label" : "っ" }
					, { "label" : "く" }
					, { "label" : "り" }
				]
				, [
					{ "label" : "通", "value" : [ "と", "お" ] }
					, { "label" : "りゃ" }
					, { "label" : "ん" }
					, { "label" : "せ" }
				]
				, [
					{ "label" : "お" }
					, { "label" : "ん" }
					, { "label" : "ど" }
					, { "label" : "りゃ" }
					, { "label" : "あ" }
				]
				, [
					{ "label" : "錯", "value" : [ "さ", "っ" ] }
					, { "label" : "覚", "value" : ["か", "く"] }
				]
				, [
					{ "label" : "カ", "value" : [ "か" ] }
					, { "label" : "レ", "value" : ["れ"] }
					, { "label" : "ン", "value" : ["ん"] }
					, { "label" : "ダ", "value" : ["だ"] }
					, { "label" : "ー", "value" : ["ー"] }
				]
				, [
					{ "label" : "無", "value" : [ "む" ] }
					, { "label" : "鉄", "value" : ["て", "っ"] }
					, { "label" : "砲", "value" : ["ぽ", "う"] }
				]
				, [
					{ "label" : "ギ", "value" : [ "ぎ" ] }
					, { "label" : "ア", "value" : ["あ"] }
					, { "label" : "サ", "value" : ["さ"] }
					, { "label" : "ー", "value" : ["ー"] }
					, { "label" : "ド", "value" : ["ど"] }
				]
				, [
					{ "label" : "ず" }
					, { "label" : "ん" }
					, { "label" : "だ" }
					, { "label" : "餅", "value" : ["も", "ち"] }
				]
				, [
					{ "label" : "栗", "value" : ["く", "り"] }
					, { "label" : "ご" }
					, { "label" : "飯", "value" : ["は", "ん"] }
				]
				, [
					{ "label" : "真", "value" : ["ま"] }
					, { "label" : "っ" }
					, { "label" : "直", "value" : ["す"] }
					, { "label" : "ぐ" }
				]
			]
		}
		, { 
			"モード" : "上級" 
			, "一定時間で落ちるペース" : {
				"秒毎に" : 2	
				, "ずつ落ちる" : 5
			}
			, "間違えた時のペナルティ" : 10
			, "一つクリアした毎のボーナス" : 5
			, "プレイ中の画像" : "fantasy_witch.png"
			, "クリア時の画像" : "majo_girl_majokko.png"
			, "ゲームオーバー時の画像" : "tobikomi.png"
			, "ローマ字を表示する" : false
			, "キー位置を表示する" : false
			, "課題" : [
				[
					{ "label" : "ちゅ" }
					, { "label" : "ら" }
					, { "label" : "海", "value" : ["う", "み"] }
					, { "label" : "水", "value" : ["す", "い"] }
					, { "label" : "族", "value" : ["ぞ", "く"] }
					, { "label" : "館", "value" : ["か", "ん"] }
				]
				, [
					{ "label" : "三", "value" : [ "さ", "ん" ] }
					, { "label" : "社", "value" : ["じゃ"] }
					, { "label" : "祭", "value" : ["ま", "つ", "り"] }
				]
				, [
					{ "label" : "テ", "value" : [ "て" ] }
					, { "label" : "ッ", "value" : ["っ"] }
					, { "label" : "ク", "value" : ["く"] }
					, { "label" : "ゼ", "value" : ["ぜ"] }
					, { "label" : "ミ", "value" : ["み"] }
					, { "label" : "ナ", "value" : ["な"] }
					, { "label" : "ー", "value" : ["ー"] }
					, { "label" : "ル", "value" : ["る"] }
				]
				, [
					{ "label" : "ド", "value" : [ "ど" ] }
					, { "label" : "ナ", "value" : ["な"] }
					, { "label" : "ル", "value" : ["る"] }
					, { "label" : "ド", "value" : ["ど"] }
					, { "label" : "ト", "value" : ["と"] }
					, { "label" : "ラ", "value" : ["ら"] }
					, { "label" : "ン", "value" : ["ん"] }
					, { "label" : "プ", "value" : ["ぷ"] }
				]
				, [
					{ "label" : "神", "value" : [ "か", "ん" ] }
					, { "label" : "田", "value" : ["だ"] }
					, { "label" : "明", "value" : ["みょ", "う"] }
					, { "label" : "神", "value" : ["じ", "ん"] }
				]
				, [
					{ "label" : "プ", "value" : [ "ぷ" ] }
					, { "label" : "ロ", "value" : ["ろ"] }
					, { "label" : "グ", "value" : ["ぐ"] }
					, { "label" : "ラ", "value" : ["ら"] }
					, { "label" : "ミ", "value" : ["み"] }
					, { "label" : "ン", "value" : ["ん"] }
					, { "label" : "グ", "value" : ["ぐ"] }
				]
				, [
					{ "label" : "逃", "value" : [ "に" ] }
					, { "label" : "げ" }
					, { "label" : "る" }
					, { "label" : "は" }
					, { "label" : "恥", "value" : ["は", "じ"] }
					, { "label" : "だ" }
					, { "label" : "が" }
					, { "label" : "役", "value" : ["や", "く"] }
					, { "label" : "に" }
					, { "label" : "立", "value" : ["た"] }
					, { "label" : "つ" }
				]
				, [
					{ "label" : "ト", "value" : [ "と" ] }
					, { "label" : "ム", "value" : ["む"] }
					, { "label" : "ヤ", "value" : ["や"] }
					, { "label" : "ン", "value" : ["ん"] }
					, { "label" : "ク", "value" : ["く"] }
					, { "label" : "ン", "value" : ["ん"] }
				]
				, [
					{ "label" : "週", "value" : [ "しゅ", "う" ] }
					, { "label" : "間", "value" : ["か", "ん"] }
					, { "label" : "天", "value" : ["て", "ん"] }
					, { "label" : "気", "value" : ["き"] }
					, { "label" : "予", "value" : ["よ"] }
					, { "label" : "報", "value" : ["ほ", "う"] }
				]
				, [
					{ "label" : "エ", "value" : [ "え" ] }
					, { "label" : "ア", "value" : ["あ"] }
					, { "label" : "ー", "value" : ["ー"] }
					, { "label" : "コ", "value" : ["こ"] }
					, { "label" : "ン", "value" : ["ん"] }
					, { "label" : "ディ", "value" : ["でぃ"] }
					, { "label" : "ショ", "value" : ["しょ"] }
					, { "label" : "ナ", "value" : ["な"] }
					, { "label" : "ー", "value" : ["ー"] }
				]
				, [
					{ "label" : "ジャ", "value" : [ "じゃ" ] }
					, { "label" : "バ", "value" : ["ば"] }
					, { "label" : "ス", "value" : ["す"] }
					, { "label" : "ク", "value" : ["く"] }
					, { "label" : "リ", "value" : ["り"] }
					, { "label" : "プ", "value" : ["ぷ"] }
					, { "label" : "ト", "value" : ["と"] }
				]
				, [
					{ "label" : "鬼", "value" : [ "お", "に" ] }
					, { "label" : "は", "value" : ["は"] }
					, { "label" : "外", "value" : ["そ", "と"] }
					, { "label" : "福", "value" : ["ふ", "く"] }
					, { "label" : "は", "value" : ["は"] }
					, { "label" : "内", "value" : ["う", "ち"] }
				]
			]
		}
	];

	/* 処理開始 */
	$(function(){

		var witch = $('<img id="flying_witch">');
		var top = 0, left = 0, timerId = null, isPlaying = false, mode = null;

		// キーボード
		var keyboard = new TYPEQUEST.Keyboard('sub');
		// ストップウォッチ
		var stopwatch = new TYPEQUEST.StopWatch('main');
		// モード選択ダイアログ
		var modeSelector = new TYPEQUEST.ModeSelector('main', ゲーム内容);
		// タイピングゲームエンジン
		var game = new TYPEQUEST.Game('main', ゲーム内容);

		game.delegate = {
			start : function(mode) {				
				$('#witch').hide();
				top = 0;
				left = 0;
				witch.css('top', top);
				witch.css('left', left);
				witch.css('width', 159);
				witch.attr('src', './image/' + mode.プレイ中の画像);
				
				$('#main').append(witch);

				timerId = setInterval(function(){
					top += mode.一定時間で落ちるペース.ずつ落ちる;
					witch.css('top', top);

					if ( top > 155 ) {
						game.end(true, 'ゲームオーバー！<br>Spaceキーを押してもう一度挑戦！');
					}

				}, mode.一定時間で落ちるペース.秒毎に * 1000);

				stopwatch.start();
			}
			, next_letter : function(mode, arr, isMistake) {
				if ( isMistake || mode.キー位置を表示する ) {
					keyboard.markup(arr[0]);
				} else {
					keyboard.cleanup();
				}
			}
			, next_challenge : function(mode, challenge) {
				left += 80;
				witch.css('left', left);
				top -= mode.一つクリアした毎のボーナス;
				if ( top < 0 ) { top = 0; }
				witch.css('top', top);

			}
			, mistake : function(mode) {
				top += mode.間違えた時のペナルティ;
			}
			, end : function(mode, isFailure) {
				if ( isFailure ) {
					witch.attr('src', './image/' + mode.ゲームオーバー時の画像);
					witch.css('top', 197);
					witch.css('width', 200);
				} else {
					witch.attr('src', './image/' + mode.クリア時の画像);
					witch.css('top', 110);
					witch.css('left', 840);	
				}
				
				clearInterval(timerId);
				isPlaying = false;
				stopwatch.stop();
				keyboard.cleanup();
				modeSelector.show();
			}
		};

		var mode_index = previous_mode_index = 0;

		// キーの受付を開始
		$(document).on('keydown', function(e){

			if ( !isPlaying ) {
				// ↑キー 38
				if ( e.keyCode == 38 ) {
					if ( 0 < mode_index ) {
						mode_index -= 1;
					} else {
						mode_index = 0;
					}
					modeSelector.select(mode_index);
					console.log('mode_index:', mode_index);
				// ↓キー 40
				} else if ( e.keyCode == 40 ) {
					if ( mode_index < ゲーム内容.length-1 ) {
						mode_index += 1;
					} else {
						mode_index = ゲーム内容.length-1;
					}
					modeSelector.select(mode_index);
					console.log('mode_index:', mode_index);
				// Spaceキー 32
				} else if ( e.keyCode == 32 ) {
					isPlaying = true;
					modeSelector.hide();
					if ( previous_mode_index != mode_index) {
						stopwatch.cleanup();
					}
					previous_mode_index = mode_index;
					game.start(mode_index);
				} else {
					console.log(e.keyCode);
				}
			}	
		});

	});

}(window, document, jQuery));


