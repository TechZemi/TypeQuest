;var TYPEQUEST = TYPEQUEST || {};

/**
 *	キーボードを表示します。
 */
TYPEQUEST.Keyboard = (function(window, documemt, $){

	/* イニシャライザ */
	function Keyboard(id) {
		this.elem = $('#' + id);
		this.init();
	};

	var p = Keyboard.prototype = {
		"elem" : null
		, "keys" : [ 
			[
				{ "label" : "", "size" : 0, "id" : "dummy1" }
				, { "label" : "1", "size" : 0, "id" : "num1" }
				, { "label" : "2", "size" : 0, "id" : "num2" }
				, { "label" : "3", "size" : 0, "id" : "num3" }
				, { "label" : "4", "size" : 0, "id" : "num4" }
				, { "label" : "5", "size" : 0, "id" : "num5" }
				, { "label" : "6", "size" : 0, "id" : "num6" }
				, { "label" : "7", "size" : 0, "id" : "num7" }
				, { "label" : "8", "size" : 0, "id" : "num8" }
				, { "label" : "9", "size" : 0, "id" : "num9" }
				, { "label" : "0", "size" : 0, "id" : "num0" }
				, { "label" : "ー", "size" : 0, "id" : "hyphen" }
				, { "label" : "", "size" : 0, "id" : "dummy3" }
				, { "label" : "", "size" : 0, "id" : "dummy4" }
				, { "label" : "BS", "size" : 0, "id" : "BackSpace" }
			], [
				{ "label" : "", "size" : 20, "id" : "dummy5" }
				, { "label" : "Q", "size" : 0, "id" : "alp_q" }
				, { "label" : "W", "size" : 0, "id" : "alp_w" }
				, { "label" : "E", "size" : 0, "id" : "alp_e" }
				, { "label" : "R", "size" : 0, "id" : "alp_r" }
				, { "label" : "T", "size" : 0, "id" : "alp_t" }
				, { "label" : "Y", "size" : 0, "id" : "alp_y" }
				, { "label" : "U", "size" : 0, "id" : "alp_u" }
				, { "label" : "I", "size" : 0, "id" : "alp_i" }
				, { "label" : "O", "size" : 0, "id" : "alp_o" }
				, { "label" : "P", "size" : 0, "id" : "alp_p" }
				, { "label" : "", "size" : 0, "id" : "dummy6" }
				, { "label" : "", "size" : 0, "id" : "dummy7" }
				, { "label" : "", "size" : 36, "id" : "dummy8" }
			], [
				{ "label" : "", "size" : 30, "id" : "dummy9" }
				, { "label" : "A", "size" : 0, "id" : "alp_a" }
				, { "label" : "S", "size" : 0, "id" : "alp_s" }
				, { "label" : "D", "size" : 0, "id" : "alp_d" }
				, { "label" : "F", "size" : 0, "id" : "alp_f" }
				, { "label" : "G", "size" : 0, "id" : "alp_g" }
				, { "label" : "H", "size" : 0, "id" : "alp_h" }
				, { "label" : "J", "size" : 0, "id" : "alp_j" }
				, { "label" : "K", "size" : 0, "id" : "alp_k" }
				, { "label" : "L", "size" : 0, "id" : "alp_l" }
				, { "label" : "", "size" : 0, "id" : "dummy10" }
				, { "label" : "", "size" : 0, "id" : "dummy11" }
				, { "label" : "", "size" : 0, "id" : "dummy12" }
			], [
				{ "label" : "Shift", "size" : 56, "id" : "l_shift" }
				, { "label" : "Z", "size" : 0, "id" : "alp_z" }
				, { "label" : "X", "size" : 0, "id" : "alp_x" }
				, { "label" : "C", "size" : 0, "id" : "alp_c" }
				, { "label" : "V", "size" : 0, "id" : "alp_v" }
				, { "label" : "B", "size" : 0, "id" : "alp_b" }
				, { "label" : "N", "size" : 0, "id" : "alp_n" }
				, { "label" : "M", "size" : 0, "id" : "alp_m" }
				, { "label" : "", "size" : 0, "id" : "dummy13" }
				, { "label" : "", "size" : 0, "id" : "dummy14" }
				, { "label" : "", "size" : 0, "id" : "dummy15" }
				, { "label" : "", "size" : 0, "id" : "dummy16" }
				, { "label" : "Shift", "size" : 56, "id" : "r_shift" }
			]
		]
	};

	p.init = function() {
		var div = $('<div>');
		for ( var i in this.keys ) {
			this.createRow(this.keys[i]).appendTo(div);
		}
		this.elem.append(div);
	};

	p.createRow = function(arr) {
		var ul = $('<ul>');

		for ( var i in arr ) {
			var key = arr[i];
			var li = $('<li>').attr('id', key.id);

			if ( key.label ) {
				li.text(key.label);
			} else {
				li.text('　');
			}
			if ( key.size > 0 ) {
				li.css('width', 50 + key.size);
			}
			ul.append(li);
		}

		return ul;
	};

	/**
	 *	指定したキーを装飾します
	 */
	p.markup = function(label) {
		label = label.toUpperCase();
		$('.markup').removeClass('markup');

		for ( var i in this.keys ) {
			var row = this.keys[i];
			for ( var j in row ) {
				var key = row[j];
				if ( key.label == label ) {
					$('#' + key.id).addClass('markup');
				}
			}
		}
	};

	p.cleanup = function() {
		$('.markup').removeClass('markup');
	};

	return Keyboard;

}(window, document, jQuery));

/**
 *	ストップウォッチを表示します。
 */
TYPEQUEST.StopWatch = (function(window, documemt, $) {

	/* イニシャライザ */
	function StopWatch(id) {
		this.elem = $('#' + id);
		this.init();
	};

	var p = StopWatch.prototype = {
		"display" : null
		, "start_timestamp" : null
		, "count" : 0
		, "timerId" : null
		, "history" : []
	};

	p.init = function() {
		this.display = $('<div id="stopwatch">0 秒</div>');
		this.elem.append(this.display);
	};

	p.start = function() {
		var _self = this;
		this.count = 0;
		this.start_timestamp = new Date();

		var previous_result = ( this.history.length > 0 ) ? '<br>前回: ' + this.history[this.history.length-1] + ' 秒' : '';
		var best_result = ( this.history.length > 1 ) ? '<br>ベスト: ' + Math.min.apply(null, this.history) + ' 秒' : '';
		this.display = this.display.html('0 秒' + previous_result + best_result);

		this.timerId = setInterval(function(){
			_self.count += 1; 
			_self.display.html(_self.count + ' 秒' + previous_result + best_result);
		}, 1000);
	};

	p.stop = function() {
		clearInterval(this.timerId);
		var result = (((new Date()).getTime() - this.start_timestamp.getTime()) / 1000);
		var previous_result = ( this.history.length > 0 ) ? '<br>前回: ' + this.history[this.history.length-1] + ' 秒' : '';
		this.history.push(result);

		var best_result = ( this.history.length > 1 ) ? '<br>ベスト: ' + Math.min.apply(null, this.history) + ' 秒' : '';

		this.display.html(result + ' 秒' + previous_result + best_result);
	};

	p.cleanup = function() {
		this.history = [];
	};

	return StopWatch;

}(window, document, jQuery));

TYPEQUEST.ModeSelector = (function(window, documemt, $) {
	
	/* イニシャライザ */
	function ModeSelector(id, contents) {
		this.elem = $('#' + id);
		this.init(contents);
	};

	var p = ModeSelector.prototype = {
		"elem" : null
		, "selector" : null
	};

	p.init = function(contents) {
		this.selector = $('<div id="selector">上下キーでモードを選択</div>');
		var ul = $('<ul>');
		for ( var i in contents ) {
			var mode = contents[i];
			if ( i == 0 ) {
				$('<li class="selected">' + mode.モード + '</li>').appendTo(ul);
			} else {
				$('<li>' + mode.モード + '</li>').appendTo(ul);
			}
		}
		this.selector.append(ul).appendTo(this.elem);

		var centerX = this.elem.height() / 2;
		var centerY = this.elem.width() / 2;
		var adjustmentY = this.selector.width() / 2;
		this.selector.css('top', centerX + 100);
		this.selector.css('left', centerY - adjustmentY);
	};

	p.select = function(mode_index) {
		$('#selector li').removeClass('selected');
		$('#selector li:eq(' + mode_index +')').addClass('selected');
	};

	p.show = function() {
		this.selector.show();
	};

	p.hide = function() {
		this.selector.hide();
	};

	return ModeSelector;


}(window, document, jQuery));

/**
 *	タイピングゲームを提供します。
 */
TYPEQUEST.Game = (function(window, documemt, $){
	
	/* イニシャライザ */
	function Game(id, contents) {
		this.elem = $('#' + id);
		this.contents = contents;
		this.init();
	};

	var p = Game.prototype = {
		"elem" : null
		, "contents" : null
		, "challenges" : null
		, "centerX" : null
		, "centerY" : null
		, "display" : null
		, "moji_map" : [
			[ 
				{ "moji" : "あ", "roman": ["a"] }
				, { "moji" : "い", "roman": ["i"] }
				, { "moji" : "う", "roman": ["u"] }
				, { "moji" : "え", "roman": ["e"] }
				, { "moji" : "お", "roman": ["o"] }
			]
			,[ 
				{ "moji" : "か", "roman": ["ka", "ca"] }
				, { "moji" : "き", "roman": ["ki"] }
				, { "moji" : "く", "roman": ["ku", "cu"] }
				, { "moji" : "け", "roman": ["ke"] }
				, { "moji" : "こ", "roman": ["ko", "co"] }
			]
			,[ 
				{ "moji" : "さ", "roman": ["sa"] }
				, { "moji" : "し", "roman": ["si", "shi"] }
				, { "moji" : "す", "roman": ["su"] }
				, { "moji" : "せ", "roman": ["se"] }
				, { "moji" : "そ", "roman": ["so"] }
			]
			,[ 
				{ "moji" : "た", "roman": ["ta"] }
				, { "moji" : "ち", "roman": ["ti", "chi"] }
				, { "moji" : "つ", "roman": ["tu", "tsu"] }
				, { "moji" : "て", "roman": ["te"] }
				, { "moji" : "と", "roman": ["to"] }
			]
			,[ 
				{ "moji" : "な", "roman": ["na"] }
				, { "moji" : "に", "roman": ["ni"] }
				, { "moji" : "ぬ", "roman": ["nu"] }
				, { "moji" : "ね", "roman": ["ne"] }
				, { "moji" : "の", "roman": ["no"] }
			]
			,[ 
				{ "moji" : "は", "roman": ["ha"] }
				, { "moji" : "ひ", "roman": ["hi"] }
				, { "moji" : "ふ", "roman": ["hu", "fu"] }
				, { "moji" : "へ", "roman": ["he"] }
				, { "moji" : "ほ", "roman": ["ho"] }
			]
			,[ 
				{ "moji" : "ま", "roman": ["ma"] }
				, { "moji" : "み", "roman": ["mi"] }
				, { "moji" : "む", "roman": ["mu"] }
				, { "moji" : "め", "roman": ["me"] }
				, { "moji" : "も", "roman": ["mo"] }
			]
			,[ 
				{ "moji" : "や", "roman": ["ya"] }
				, { "moji" : "ゆ", "roman": ["yu"] }
				, { "moji" : "よ", "roman": ["yo"] }
			]
			,[ 
				{ "moji" : "ら", "roman": ["ra"] }
				, { "moji" : "り", "roman": ["ri"] }
				, { "moji" : "る", "roman": ["ru"] }
				, { "moji" : "れ", "roman": ["re"] }
				, { "moji" : "ろ", "roman": ["ro"] }
			]
			,[ 
				{ "moji" : "わ", "roman": ["wa"] }
				, { "moji" : "を", "roman": ["wo"] }
				, { "moji" : "ん", "roman": ["nn"] }
			]
			,[ 
				{ "moji" : "ぁ", "roman": ["la", "xa"] }
				, { "moji" : "ぃ", "roman": ["li", "xi"] }
				, { "moji" : "ぅ", "roman": ["lu", "xu"] }
				, { "moji" : "ぇ", "roman": ["le", "xe"] }
				, { "moji" : "ぉ", "roman": ["lo", "xo"] }
			]
			,[ 
				{ "moji" : "が", "roman": ["ga"] }
				, { "moji" : "ぎ", "roman": ["gi"] }
				, { "moji" : "ぐ", "roman": ["gu"] }
				, { "moji" : "げ", "roman": ["ge"] }
				, { "moji" : "ご", "roman": ["go"] }
			]
			,[ 
				{ "moji" : "ざ", "roman": ["za"] }
				, { "moji" : "じ", "roman": ["zi", "ji"] }
				, { "moji" : "ず", "roman": ["zu"] }
				, { "moji" : "ぜ", "roman": ["ze"] }
				, { "moji" : "ぞ", "roman": ["zo"] }
			] 
			,[ 
				{ "moji" : "だ", "roman": ["da"] }
				, { "moji" : "ぢ", "roman": ["di"] }
				, { "moji" : "づ", "roman": ["du"] }
				, { "moji" : "で", "roman": ["de"] }
				, { "moji" : "ど", "roman": ["do"] }
			]
			,[ 
				{ "moji" : "ば", "roman": ["ba"] }
				, { "moji" : "び", "roman": ["bi"] }
				, { "moji" : "ぶ", "roman": ["bu"] }
				, { "moji" : "べ", "roman": ["be"] }
				, { "moji" : "ぼ", "roman": ["bo"] }
			]
			,[ 
				{ "moji" : "ぱ", "roman": ["pa"] }
				, { "moji" : "ぴ", "roman": ["pi"] }
				, { "moji" : "ぷ", "roman": ["pu"] }
				, { "moji" : "ぺ", "roman": ["pe"] }
				, { "moji" : "ぽ", "roman": ["po"] }
			]
			,[ 
				{ "moji" : "ふぁ", "roman": ["fa"] }
				, { "moji" : "ふぃ", "roman": ["fi"] }
				, { "moji" : "ふぇ", "roman": ["fe"] }
				, { "moji" : "ふぉ", "roman": ["fo"] }
			]
			,[ 
				{ "moji" : "ゔぁ", "roman": ["va"] }
				, { "moji" : "ゔぃ", "roman": ["vi"] }
				, { "moji" : "ゔ", "roman": ["vu"] }
				, { "moji" : "ゔぇ", "roman": ["ve"] }
				, { "moji" : "ゔぉ", "roman": ["vo"] }
			]
			,[ 
				{ "moji" : "きゃ", "roman": ["kya"] }
				, { "moji" : "きぃ", "roman": ["kyi"] }
				, { "moji" : "きゅ", "roman": ["kyu"] }
				, { "moji" : "きぇ", "roman": ["kye"] }
				, { "moji" : "きょ", "roman": ["kyo"] }
			]
			,[ 
				{ "moji" : "ぎゃ", "roman": ["gya"] }
				, { "moji" : "ぎぃ", "roman": ["gyi"] }
				, { "moji" : "ぎゅ", "roman": ["gyu"] }
				, { "moji" : "ぎぇ", "roman": ["gye"] }
				, { "moji" : "ぎょ", "roman": ["gyo"] }
			]
			,[ 
				{ "moji" : "しゃ", "roman": ["sya", "sha"] }
				, { "moji" : "しぃ", "roman": ["syi"] }
				, { "moji" : "しゅ", "roman": ["syu", "shu"] }
				, { "moji" : "しぇ", "roman": ["sye", "she"] }
				, { "moji" : "しょ", "roman": ["syo", "sho"] }
			]
			,[ 
				{ "moji" : "じゃ", "roman": ["zya", "ja", "jya"] }
				, { "moji" : "じぃ", "roman": ["zyi", "jyi"] }
				, { "moji" : "じゅ", "roman": ["zyu", "ju", "jyu"] }
				, { "moji" : "じぇ", "roman": ["zye", "je", "jye"] }
				, { "moji" : "じょ", "roman": ["zyo", "jo", "jyo"] }
			]
			,[ 
				{ "moji" : "ちゃ", "roman": ["tya", "cya", "cha"] }
				, { "moji" : "ちぃ", "roman": ["tyi", "cyi"] }
				, { "moji" : "ちゅ", "roman": ["tyu", "cyu", "chu"] }
				, { "moji" : "ちぇ", "roman": ["tye", "cye", "che"] }
				, { "moji" : "ちょ", "roman": ["tyo", "cyo", "cho"] }
			]
			,[ 
				{ "moji" : "ぢゃ", "roman": ["dya"] }
				, { "moji" : "ぢぃ", "roman": ["dyi"] }
				, { "moji" : "ぢゅ", "roman": ["dyu"] }
				, { "moji" : "ぢぇ", "roman": ["dye"] }
				, { "moji" : "ぢょ", "roman": ["dyo"] }
			]
			,[ 
				{ "moji" : "でゃ", "roman": ["dha"] }
				, { "moji" : "でぃ", "roman": ["dhi"] }
				, { "moji" : "でゅ", "roman": ["dhu"] }
				, { "moji" : "でぇ", "roman": ["dhe"] }
				, { "moji" : "でょ", "roman": ["dho"] }
			]
			,[ 
				{ "moji" : "つぁ", "roman": ["tsa"] }
				, { "moji" : "つぃ", "roman": ["tsi"] }
				, { "moji" : "つぇ", "roman": ["tse"] }
				, { "moji" : "つぉ", "roman": ["tso"] }
			]
			,[ 
				{ "moji" : "てゃ", "roman": ["tha"] }
				, { "moji" : "てぃ", "roman": ["thi"] }
				, { "moji" : "てゅ", "roman": ["thu"] }
				, { "moji" : "てぇ", "roman": ["the"] }
				, { "moji" : "てぇ", "roman": ["tho"] }
			]
			,[ 
				{ "moji" : "にゃ", "roman": ["nya"] }
				, { "moji" : "にぃ", "roman": ["nyi"] }
				, { "moji" : "にゅ", "roman": ["nyu"] }
				, { "moji" : "にぇ", "roman": ["nye"] }
				, { "moji" : "にょ", "roman": ["nyo"] }
			]
			,[ 
				{ "moji" : "ひゃ", "roman": ["hya"] }
				, { "moji" : "ひぃ", "roman": ["hyi"] }
				, { "moji" : "ひゅ", "roman": ["hyu"] }
				, { "moji" : "ひぇ", "roman": ["hye"] }
				, { "moji" : "ひょ", "roman": ["hyo"] }
			]
			,[ 
				{ "moji" : "びゃ", "roman": ["bya"] }
				, { "moji" : "びぃ", "roman": ["byi"] }
				, { "moji" : "びゅ", "roman": ["byu"] }
				, { "moji" : "びぇ", "roman": ["bye"] }
				, { "moji" : "びょ", "roman": ["byo"] }
			]
			,[ 
				{ "moji" : "ぴゃ", "roman": ["pya"] }
				, { "moji" : "ぴぃ", "roman": ["pyi"] }
				, { "moji" : "ぴゅ", "roman": ["pyu"] }
				, { "moji" : "ぴぇ", "roman": ["pye"] }
				, { "moji" : "ぴょ", "roman": ["pyo"] }
			]
			,[ 
				{ "moji" : "ふゃ", "roman": ["fya"] }
				, { "moji" : "ふゅ", "roman": ["fyu"] }
				, { "moji" : "ふょ", "roman": ["fyo"] }
			]
			,[ 
				{ "moji" : "みゃ", "roman": ["mya"] }
				, { "moji" : "みぃ", "roman": ["myi"] }
				, { "moji" : "みゅ", "roman": ["myu"] }
				, { "moji" : "みぇ", "roman": ["mye"] }
				, { "moji" : "みょ", "roman": ["myo"] }
			]
			,[ 
				{ "moji" : "りゃ", "roman": ["rya"] }
				, { "moji" : "りぃ", "roman": ["ryi"] }
				, { "moji" : "りゅ", "roman": ["ryu"] }
				, { "moji" : "りぇ", "roman": ["rye"] }
				, { "moji" : "りょ", "roman": ["ryo"] }
			]
			,[
				{ "moji" : "くぁ", "roman": ["kwa"] }
				, { "moji" : "ぐぁ", "roman": ["gwa"] }
				, { "moji" : "とぅ", "roman": ["twu"] }
				, { "moji" : "どぅ", "roman": ["dwu"] }
			]
		]
		, "mode_index" : 0
		, "challenge_index" : 0
		, "current_challenge" : null
		, "label_index" : 0
		, "moji_index" : 0
		, "letter_index" : 0
		, "mistake_count" : 0
		, "delegate" : null
		, "mistake_beep" : null

	};

	p.init = function() {
		this.mistake_beep = new Audio('');
		this.mistake_beep.autoplay = false;
		this.mistake_beep.src = './audio/cancel3.mp3';

		this.centerX = this.elem.height() / 2;
		this.centerY = this.elem.width() / 2;

		this.display = $('<div id="challenge">Spaceキーを押してスタート！</div>');

		this.elem.append(this.display);
		this.center();
	};

	p.center = function() {
		var adjustmentX = this.display.height() / 2;
		var adjustmentY = this.display.width() / 2;

		this.display.css('top', this.centerX - adjustmentX);
		this.display.css('left', this.centerY - adjustmentY);
	};

	p.shuffle = function (array) {
		var n = array.length, t, i;

		while (n) {
			i = Math.floor(Math.random() * n--);
			t = array[n];
			array[n] = array[i];
			array[i] = t;
		}

		return array;
	};

	p.convert = function(moji) {
		for ( var i in this.moji_map ) {
			var arr = this.moji_map[i];
			for ( var j in arr ) {
				var char = arr[j];
				if ( char.moji == moji ) {
					return char.roman;
				}
			}
		}
		return null;
	};

	/**
	 *	現在の状態で問題を表示
	 */
	p.show = function() {
		this.display.empty();
		var mode = this.contents[this.mode_index];
		var label = $('<ul id="label">')
			, value = $('<ul id="value">');

		for ( var i in this.current_challenge ) {
			var term = this.current_challenge[i];
			$('<li>' + term.label + '</li>')
				.css('color', ((this.label_index == i) ? '#dda0dd' : 'fff'))
				.appendTo(label);
			
			var li = $('<li>');
			for ( var j in term.value ) {
				var moji = term.value[j]
				var roman = term.roman[j];
				var letters = $('<ul>');

				for ( var k in roman[0] ) {
					$('<li>' + roman[0][k] + '</li>')
						.css('color', ((this.label_index == i && this.moji_index == j && this.letter_index == k) ? '#dda0dd' : 'fff'))
						.appendTo(letters);
				}

				$(letters).appendTo(li);
			}
			li.appendTo(value);
		}

		if ( mode.ローマ字を表示する ) {
			this.display.append(label).append(value);
		} else {
			this.display.append(label);
		}
		

		if ( this.delegate && this.delegate.next_letter ) {
			this.delegate.next_letter(mode, this.next_letter());
		}
	};

	p.start = function(mode_index) {
		this.mode_index = mode_index;
		this.challenges = this.shuffle([].concat(this.contents[mode_index].課題));
		this.challenge_index = 0;

		if ( this.challenges.length > 10 ) this.challenges.length = 10;

		if ( this.delegate && this.delegate.start ) {
			this.delegate.start(this.contents[this.mode_index]);
		}

		this.next(true);

		// キーの受付を開始
		$(document).on('keydown.game', this.onKeyDown.bind(this));
	};

	/**
	 *	次のチャレンジに移る
	 */
	p.next = function(nosignal) {
		if ( nosignal === undefined ) nosignal = false;
		var challenge = this.challenges[this.challenge_index]; 

		this.label_index = 0;
		this.moji_index = 0;
		this.letter_index = 0;

		for ( var i in challenge ) {
			var term = challenge[i];
			term.roman = [];

			// labelがひらがなの場合、valueは省略できるので、後続処理を統一するため、省略されたvalueを作っている
			if ( term.value == undefined ) {
				term.value = [].concat(term.label);
			}

			for ( var j in term.value ) {
				var moji = term.value[j];

				// 「っ」の場合、次の文字の子音を重ねる対応
				if ( moji == 'っ' ) {
					var next_term = challenge[parseInt(i)+1];
					var next_roman = this.convert(((next_term.value) ? next_term.value[0] : next_term.label));
					var arr = [];
					arr[0] = next_roman[0].charAt(0);
					term.roman.push(arr);

				// 「ー（長音）」の場合、
				} else if ( moji == 'ー') {
					term.roman.push(['ー']);
				} else {
					var roman = this.convert(moji);
					term.roman.push(roman);
				}
			}
		}

		this.current_challenge = challenge;
		
		if ( !nosignal && this.delegate && this.delegate.next_challenge ) {
			this.delegate.next_challenge(this.contents[this.mode_index], challenge);
		}

		this.show();
		this.center();
	};

	p.end = function(isCancel, message) {
		if ( isCancel === undefined ) isCancel = false;
		if ( message === undefined ) message = 'クリア！！<br>Spaceキーを押してもう一度挑戦！';
		// キー受付を解除
		$(document).off('keydown.game');

		this.display.html(message);
		this.center();

		if ( this.delegate && this.delegate.end ) {
			this.delegate.end(this.contents[this.mode_index], isCancel);
		}
	};

	p.next_letter = function() {
		var term = this.current_challenge[this.label_index];
		var moji = term.value[this.moji_index];
		var roman = term.roman[this.moji_index];

		var letter_index = this.letter_index;
		var next_letters = roman.map(function(r) { 
			return r.charAt(letter_index);
		});

		// 「ん」の場合、次の文字がな行でなければ飛ばし入力OKとする対応
		if ( moji == 'ん' && this.letter_index == 1 ) {

			// 「ん」の後にvalue内で次のmojiがある場合（["さ","ん","ま"]）
			if ( this.moji_index < term.value.length - 1 ) {
				var next_moji = term.value[this.moji_index + 1];
				var next_roman = term.roman[this.moji_index + 1];
				next_letters = next_letters.concat(next_roman.map(function(r) { 
					return r.charAt(0);
				}));

			// 「ん」次のtermの場合
			} else if ( this.label_index < this.current_challenge.length - 1 ) {
				var next_term = this.current_challenge[this.label_index + 1];
				var next_moji = next_term.value[0];
				var next_roman = next_term.roman[0];
				next_letters = next_letters.concat(next_roman.map(function(r) { 
					return r.charAt(0);
				}));
			}
		} 

		return next_letters;
	};

	/**
	 *	キー入力を検知した時に呼ばれる
	 */
	p.onKeyDown = function(e) {
		var typed_letter = ( e.keyCode == 189 ) ? 'ー' : 'abcdefghijklmnopqrstuvwxyz'.charAt(e.keyCode - 65);
		var term = this.current_challenge[this.label_index];
		var moji = term.value[this.moji_index];
		var roman = term.roman[this.moji_index];

		var letter_index = this.letter_index;
		var matched_roman = roman.filter(function(r) { 
			return r.charAt(letter_index) == typed_letter;
		});

		if ( matched_roman.length > 0 ) {
			roman = term.roman[this.moji_index] = matched_roman;
			
			if ( this.letter_index < roman[0].length - 1) {
				this.letter_index += 1;
			} else {
				this.letter_index = 0;
				if ( this.moji_index < term.value.length - 1) {
					this.moji_index += 1;	
				} else {
					this.moji_index = 0;
					if ( this.label_index < this.current_challenge.length - 1 ) {
						this.label_index += 1;	
					} else {
						this.label_index = 0;
						
						if ( this.challenge_index < this.challenges.length -1 ) {
							this.challenge_index += 1;	
							this.next();
						} else {
							this.end();
							return;
						}
					}
				}
			}
			this.show();
			return;
		
		// 「ん」の場合、次の文字がな行でなければ飛ばし入力OKとする対応
		} else if ( moji == 'ん' && this.letter_index == 1 && typed_letter != 'n' ) {

			// 「ん」の後にvalue内で次のmojiがある場合（["さ","ん","ま"]）
			if ( this.moji_index < term.value.length - 1 ) {
				var next_moji = term.value[this.moji_index + 1];
				var next_roman = term.roman[this.moji_index + 1];
				var matched_next_roman = next_roman.filter(function(r) { 
					return r.charAt(0) == typed_letter;
				});

				if ( matched_next_roman.length > 0 ) {
					matched_next_roman = term.roman[this.moji_index + 1] = matched_next_roman;
					this.letter_index = 1;
					this.moji_index += 1;	
					this.show();
					return;
				}

			// 「ん」次のtermの場合
			} else if ( this.label_index < this.current_challenge.length - 1 ) {
				var next_term = this.current_challenge[this.label_index + 1];
				var next_moji = next_term.value[0];
				var next_roman = next_term.roman[0];
				var matched_next_roman = next_roman.filter(function(r) { 
					return r.charAt(0) == typed_letter;
				});

				if ( matched_next_roman.length > 0 ) {
					matched_next_roman = term.roman[this.moji_index + 1] = matched_next_roman;
					this.letter_index = 1;
					this.moji_index = 0;
					this.label_index += 1;	
					this.show();
					return;
				}
			}
		}

		if ( this.delegate && this.delegate.mistake ) {
			this.delegate.mistake(this.contents[this.mode_index]);
		}

		// 間違えたら音で知らせる
		this.mistake_beep.play();
	};

	return Game;

}(window, document, jQuery));

