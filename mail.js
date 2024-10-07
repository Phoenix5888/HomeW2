undefined + 1;			//  NaN			|| number
'true' == true			//  false		|| boolean
false == 'false'		//  false		|| boolean
null == ''			//  false		|| boolean
3 ** (9 / 3);			//    1			|| number	
!!'false' == !!'true'		//  true		|| boolean
0 || '0' && 1			//    1			|| number
1 < 2 < 3			//  true		|| boolean
'foo'+ + +'bar'			// 'fooNaN'або 'NaNbar'	|| string (в залежності від оператору він в постфіксній формі чи префікс формі)
3 ** 2 / 3;			//    0			|| number
1 < 2 > 3			// false		|| boolean
(+null == false) < 1;		// true			|| boolean
false && true || true		// true			|| boolean
false && (true || true);	// false		|| boolean
(+null == false) < 1 ** 5;	// true                 || boolean


