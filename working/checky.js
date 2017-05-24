var inside = require('point-in-polygon')

/* create map variable */

/* list of polygon co-ordinates */
/* correct format for google maps */
var RandburgCoords = [
          {lat: -26.053674,lng: 27.974024},
          {lat: -26.053228,lng: 27.97405},
          {lat: -26.048595,lng: 27.974122},
          {lat: -26.04604,lng: 27.974161},
          {lat: -26.046082,lng: 27.969709},
          {lat: -26.049038,lng: 27.969651},
          {lat: -26.050631,lng: 27.968632},
          {lat: -26.051363,lng: 27.968145},
          {lat: -26.052382,lng: 27.967484},
          {lat: -26.055403,lng: 27.963646},
          {lat: -26.056957,lng: 27.960892},
          {lat: -26.057722,lng: 27.9595},
          {lat: -26.058472,lng: 27.958168},
          {lat: -26.059764,lng: 27.95671},
          {lat: -26.060822,lng: 27.955506},
          {lat: -26.060883,lng: 27.955437},
          {lat: -26.061397,lng: 27.954471},
          {lat: -26.061494,lng: 27.954259},
          {lat: -26.061584,lng: 27.953957},
          {lat: -26.061703,lng: 27.953485},
          {lat: -26.062009,lng: 27.951911},
          {lat: -26.062164,lng: 27.951149},
          {lat: -26.062407,lng: 27.949971},
          {lat: -26.06261,lng: 27.949032},
          {lat: -26.062916,lng: 27.949074},
          {lat: -26.062943,lng: 27.948896},
          {lat: -26.064073,lng: 27.947252},
          {lat: -26.065379,lng: 27.945345},
          {lat: -26.066682,lng: 27.946475},
          {lat: -26.067776,lng: 27.947867},
          {lat: -26.068177,lng: 27.947461},
          {lat: -26.068285,lng: 27.947591},
          {lat: -26.068851,lng: 27.948315},
          {lat: -26.069425,lng: 27.949036},
          {lat: -26.070978,lng: 27.947926},
          {lat: -26.07252,lng: 27.946835},
          {lat: -26.072569,lng: 27.946801},
          {lat: -26.072619,lng: 27.946765},
          {lat: -26.072707,lng: 27.9467},
          {lat: -26.072967,lng: 27.946516},
          {lat: -26.073094,lng: 27.946494},
          {lat: -26.073297,lng: 27.946417},
          {lat: -26.073427,lng: 27.946344},
          {lat: -26.073584,lng: 27.946229},
          {lat: -26.073765,lng: 27.946068},
          {lat: -26.073949,lng: 27.94588},
          {lat: -26.074129,lng: 27.945754},
          {lat: -26.07429,lng: 27.945669},
          {lat: -26.074346,lng: 27.945646},
          {lat: -26.074417,lng: 27.945616},
          {lat: -26.074555,lng: 27.945581},
          {lat: -26.074754,lng: 27.945558},
          {lat: -26.078474,lng: 27.945416},
          {lat: -26.078742,lng: 27.945428},
          {lat: -26.079298,lng: 27.945014},
          {lat: -26.079659,lng: 27.944826},
          {lat: -26.080019,lng: 27.94478},
          {lat: -26.080744,lng: 27.944822},
          {lat: -26.080768,lng: 27.944874},
          {lat: -26.080899,lng: 27.944865},
          {lat: -26.081072,lng: 27.94487},
          {lat: -26.081381,lng: 27.944921},
          {lat: -26.081538,lng: 27.94498},
          {lat: -26.081635,lng: 27.945017},
          {lat: -26.084368,lng: 27.946198},
          {lat: -26.085823,lng: 27.946832},
          {lat: -26.08597,lng: 27.946903},
          {lat: -26.086153,lng: 27.947025},
          {lat: -26.086416,lng: 27.947319},
          {lat: -26.086665,lng: 27.947167},
          {lat: -26.086954,lng: 27.947045},
          {lat: -26.087258,lng: 27.946949},
          {lat: -26.087826,lng: 27.946837},
          {lat: -26.088143,lng: 27.946782},
          {lat: -26.089048,lng: 27.946624},
          {lat: -26.093672,lng: 27.945813},
          {lat: -26.094215,lng: 27.945712},
          {lat: -26.094615,lng: 27.9456},
          {lat: -26.095092,lng: 27.945544},
          {lat: -26.095655,lng: 27.945529},
          {lat: -26.095695,lng: 27.945093},
          {lat: -26.095802,lng: 27.944769},
          {lat: -26.096786,lng: 27.942948},
          {lat: -26.096963,lng: 27.942634},
          {lat: -26.09709,lng: 27.942461},
          {lat: -26.097314,lng: 27.942222},
          {lat: -26.100578,lng: 27.944391},
          {lat: -26.102232,lng: 27.94551},
          {lat: -26.104069,lng: 27.946755},
          {lat: -26.102815,lng: 27.948489},
          {lat: -26.101857,lng: 27.949855},
          {lat: -26.101743,lng: 27.949945},
          {lat: -26.101638,lng: 27.950014},
          {lat: -26.101589,lng: 27.950036},
          {lat: -26.101532,lng: 27.95007},
          {lat: -26.101442,lng: 27.950112},
          {lat: -26.101276,lng: 27.950174},
          {lat: -26.101111,lng: 27.950247},
          {lat: -26.100976,lng: 27.950303},
          {lat: -26.100883,lng: 27.950345},
          {lat: -26.100751,lng: 27.95043},
          {lat: -26.100635,lng: 27.950525},
          {lat: -26.100512,lng: 27.950652},
          {lat: -26.100638,lng: 27.950756},
          {lat: -26.100723,lng: 27.950823},
          {lat: -26.100782,lng: 27.950888},
          {lat: -26.100813,lng: 27.950967},
          {lat: -26.100815,lng: 27.951051},
          {lat: -26.100863,lng: 27.95111},
          {lat: -26.100922,lng: 27.951096},
          {lat: -26.100998,lng: 27.951074},
          {lat: -26.101049,lng: 27.95111},
          {lat: -26.101127,lng: 27.951186},
          {lat: -26.101203,lng: 27.951296},
          {lat: -26.101216,lng: 27.951328},
          {lat: -26.10124,lng: 27.951389},
          {lat: -26.101254,lng: 27.951473},
          {lat: -26.101279,lng: 27.951566},
          {lat: -26.101344,lng: 27.951628},
          {lat: -26.101437,lng: 27.951704},
          {lat: -26.101493,lng: 27.951774},
          {lat: -26.101541,lng: 27.951878},
          {lat: -26.101589,lng: 27.951957},
          {lat: -26.101653,lng: 27.952035},
          {lat: -26.101757,lng: 27.952184},
          {lat: -26.101828,lng: 27.952294},
          {lat: -26.101915,lng: 27.952395},
          {lat: -26.101999,lng: 27.952513},
          {lat: -26.102067,lng: 27.952645},
          {lat: -26.102142,lng: 27.952755},
          {lat: -26.102227,lng: 27.952893},
          {lat: -26.102277,lng: 27.952991},
          {lat: -26.10237,lng: 27.953053},
          {lat: -26.102441,lng: 27.953121},
          {lat: -26.102443,lng: 27.953211},
          {lat: -26.102421,lng: 27.953371},
          {lat: -26.102418,lng: 27.953514},
          {lat: -26.102398,lng: 27.953661},
          {lat: -26.102396,lng: 27.953793},
          {lat: -26.102424,lng: 27.953908},
          {lat: -26.102477,lng: 27.954001},
          {lat: -26.102491,lng: 27.954122},
          {lat: -26.102438,lng: 27.95438},
          {lat: -26.102418,lng: 27.954456},
          {lat: -26.102396,lng: 27.95456},
          {lat: -26.102396,lng: 27.954687},
          {lat: -26.102396,lng: 27.954774},
          {lat: -26.102412,lng: 27.954861},
          {lat: -26.102421,lng: 27.95499},
          {lat: -26.102412,lng: 27.955156},
          {lat: -26.10241,lng: 27.955325},
          {lat: -26.102381,lng: 27.955457},
          {lat: -26.102362,lng: 27.955598},
          {lat: -26.102365,lng: 27.95575},
          {lat: -26.10237,lng: 27.955918},
          {lat: -26.10237,lng: 27.956067},
          {lat: -26.102365,lng: 27.956202},
          {lat: -26.102365,lng: 27.956382},
          {lat: -26.10237,lng: 27.956537},
          {lat: -26.102365,lng: 27.95668},
          {lat: -26.10232,lng: 27.956767},
          {lat: -26.102227,lng: 27.957006},
          {lat: -26.102221,lng: 27.957113},
          {lat: -26.102168,lng: 27.957265},
          {lat: -26.102114,lng: 27.957383},
          {lat: -26.102092,lng: 27.957518},
          {lat: -26.102095,lng: 27.957617},
          {lat: -26.102078,lng: 27.95774},
          {lat: -26.102033,lng: 27.957903},
          {lat: -26.102038,lng: 27.958064},
          {lat: -26.102041,lng: 27.958196},
          {lat: -26.10201,lng: 27.958336},
          {lat: -26.101965,lng: 27.958477},
          {lat: -26.101906,lng: 27.958705},
          {lat: -26.101861,lng: 27.958924},
          {lat: -26.101833,lng: 27.959233},
          {lat: -26.101805,lng: 27.959453},
          {lat: -26.101738,lng: 27.959672},
          {lat: -26.101712,lng: 27.959838},
          {lat: -26.101701,lng: 27.960021},
          {lat: -26.101687,lng: 27.960142},
          {lat: -26.10167,lng: 27.96023},
          {lat: -26.101748,lng: 27.960238},
          {lat: -26.10184,lng: 27.960249},
          {lat: -26.102273,lng: 27.960295},
          {lat: -26.102339,lng: 27.960302},
          {lat: -26.102289,lng: 27.960712},
          {lat: -26.102266,lng: 27.960949},
          {lat: -26.102486,lng: 27.960971},
          {lat: -26.10284,lng: 27.960968},
          {lat: -26.10284,lng: 27.9611},
          {lat: -26.10289,lng: 27.961137},
          {lat: -26.103188,lng: 27.961753},
          {lat: -26.103277,lng: 27.961881},
          {lat: -26.103324,lng: 27.96195},
          {lat: -26.102528,lng: 27.962405},
          {lat: -26.100848,lng: 27.963374},
          {lat: -26.098508,lng: 27.964707},
          {lat: -26.098346,lng: 27.964826},
          {lat: -26.095915,lng: 27.966149},
          {lat: -26.095518,lng: 27.966347},
          {lat: -26.095097,lng: 27.96653},
          {lat: -26.09458,lng: 27.966737},
          {lat: -26.094084,lng: 27.966911},
          {lat: -26.093591,lng: 27.967062},
          {lat: -26.092967,lng: 27.967225},
          {lat: -26.092053,lng: 27.967456},
          {lat: -26.091806,lng: 27.967516},
          {lat: -26.091628,lng: 27.967559},
          {lat: -26.089212,lng: 27.968167},
          {lat: -26.087503,lng: 27.968604},
          {lat: -26.087169,lng: 27.968687},
          {lat: -26.085556,lng: 27.969085},
          {lat: -26.08254,lng: 27.969848},
          {lat: -26.081557,lng: 27.970099},
          {lat: -26.080764,lng: 27.970301},
          {lat: -26.079128,lng: 27.970734},
          {lat: -26.078555,lng: 27.970869},
          {lat: -26.077766,lng: 27.971054},
          {lat: -26.077183,lng: 27.971206},
          {lat: -26.076666,lng: 27.971386},
          {lat: -26.075899,lng: 27.971682},
          {lat: -26.07532,lng: 27.971928},
          {lat: -26.074631,lng: 27.97226},
          {lat: -26.074482,lng: 27.972342},
          {lat: -26.074077,lng: 27.972564},
          {lat: -26.073716,lng: 27.972769},
          {lat: -26.073125,lng: 27.973155},
          {lat: -26.072255,lng: 27.973733},
          {lat: -26.070917,lng: 27.974587},
          {lat: -26.069933,lng: 27.975239},
          {lat: -26.069753,lng: 27.975353},
          {lat: -26.06834,lng: 27.976253},
          {lat: -26.067856,lng: 27.976577},
          {lat: -26.067204,lng: 27.977075},
          {lat: -26.067062,lng: 27.977182},
          {lat: -26.066419,lng: 27.977735},
          {lat: -26.065767,lng: 27.978348},
          {lat: -26.065348,lng: 27.978786},
          {lat: -26.065009,lng: 27.979153},
          {lat: -26.064604,lng: 27.979618},
          {lat: -26.0641,lng: 27.980226},
          {lat: -26.061623,lng: 27.983138},
          {lat: -26.059525,lng: 27.985611},
          {lat: -26.059505,lng: 27.985633},
          {lat: -26.059147,lng: 27.98518},
          {lat: -26.059091,lng: 27.985031},
          {lat: -26.059058,lng: 27.98495},
          {lat: -26.058843,lng: 27.984679},
          {lat: -26.058742,lng: 27.984658},
          {lat: -26.05859,lng: 27.984485},
          {lat: -26.057644,lng: 27.983307},
          {lat: -26.057424,lng: 27.983104},
          {lat: -26.057346,lng: 27.983203},
          {lat: -26.057266,lng: 27.983289},
          {lat: -26.057212,lng: 27.98337},
          {lat: -26.057116,lng: 27.983447},
          {lat: -26.057027,lng: 27.983504},
          {lat: -26.056961,lng: 27.983549},
          {lat: -26.056878,lng: 27.983465},
          {lat: -26.055049,lng: 27.981816},
          {lat: -26.054958,lng: 27.981726},
          {lat: -26.055117,lng: 27.981512},
          {lat: -26.055249,lng: 27.981313},
          {lat: -26.054887,lng: 27.980992},
          {lat: -26.054477,lng: 27.98063},
          {lat: -26.055776,lng: 27.978851},
          {lat: -26.056103,lng: 27.978405},
          {lat: -26.057013,lng: 27.977175},
          {lat: -26.057076,lng: 27.977118},
          {lat: -26.057659,lng: 27.976836},
          {lat: -26.057621,lng: 27.975448},
          {lat: -26.057597,lng: 27.975387},
          {lat: -26.057531,lng: 27.975328},
          {lat: -26.057456,lng: 27.975313},
          {lat: -26.056926,lng: 27.975378},
          {lat: -26.056219,lng: 27.97545},
          {lat: -26.056182,lng: 27.9749},
          {lat: -26.056152,lng: 27.974552},
          {lat: -26.056106,lng: 27.974465},
          {lat: -26.056037,lng: 27.974408},
          {lat: -26.055959,lng: 27.974396},
          {lat: -26.055107,lng: 27.974477},
          {lat: -26.054848,lng: 27.974501},
          {lat: -26.054591,lng: 27.974526},
          {lat: -26.054076,lng: 27.974575},
          {lat: -26.053977,lng: 27.974575},
          {lat: -26.053683,lng: 27.974513},
          {lat: -26.053795,lng: 27.974018},
          {lat: -26.053674,lng: 27.974024}
        ];
/* correct format for 'point-in-polygon'*/
var RandburgCoords =
                  [[-26.053674,27.974024],
                  [-26.053228,27.97405],
                  [-26.048595,27.974122],
                  [-26.04604,27.974161],
                  [-26.046082,27.969709],
                  [-26.049038,27.969651],
                  [-26.050631,27.968632],
                  [-26.051363,27.968145],
                  [-26.052382,27.967484],
                  [-26.055403,27.963646],
                  [-26.056957,27.960892],
                  [-26.057722,27.9595],
                  [-26.058472,27.958168],
                  [-26.059764,27.95671],
                  [-26.060822,27.955506],
                  [-26.060883,27.955437],
                  [-26.061397,27.954471],
                  [-26.061494,27.954259],
                  [-26.061584,27.953957],
                  [-26.061703,27.953485],
                  [-26.062009,27.951911],
                  [-26.062164,27.951149],
                  [-26.062407,27.949971],
                  [-26.06261,27.949032],
                  [-26.062916,27.949074],
                  [-26.062943,27.948896],
                  [-26.064073,27.947252],
                  [-26.065379,27.945345],
                  [-26.066682,27.946475],
                  [-26.067776,27.947867],
                  [-26.068177,27.947461],
                  [-26.068285,27.947591],
                  [-26.068851,27.948315],
                  [-26.069425,27.949036],
                  [-26.070978,27.947926],
                  [-26.07252,27.946835],
                  [-26.072569,27.946801],
                  [-26.072619,27.946765],
                  [-26.072707,27.9467],
                  [-26.072967,27.946516],
                  [-26.073094,27.946494],
                  [-26.073297,27.946417],
                  [-26.073427,27.946344],
                  [-26.073584,27.946229],
                  [-26.073765,27.946068],
                  [-26.073949,27.94588],
                  [-26.074129,27.945754],
                  [-26.07429,27.945669],
                  [-26.074346,27.945646],
                  [-26.074417,27.945616],
                  [-26.074555,27.945581],
                  [-26.074754,27.945558],
                  [-26.078474,27.945416],
                  [-26.078742,27.945428],
                  [-26.079298,27.945014],
                  [-26.079659,27.944826],
                  [-26.080019,27.94478],
                  [-26.080744,27.944822],
                  [-26.080768,27.944874],
                  [-26.080899,27.944865],
                  [-26.081072,27.94487],
                  [-26.081381,27.944921],
                  [-26.081538,27.94498],
                  [-26.081635,27.945017],
                  [-26.084368,27.946198],
                  [-26.085823,27.946832],
                  [-26.08597,27.946903],
                  [-26.086153,27.947025],
                  [-26.086416,27.947319],
                  [-26.086665,27.947167],
                  [-26.086954,27.947045],
                  [-26.087258,27.946949],
                  [-26.087826,27.946837],
                  [-26.088143,27.946782],
                  [-26.089048,27.946624],
                  [-26.093672,27.945813],
                  [-26.094215,27.945712],
                  [-26.094615,27.9456],
                  [-26.095092,27.945544],
                  [-26.095655,27.945529],
                  [-26.095695,27.945093],
                  [-26.095802,27.944769],
                  [-26.096786,27.942948],
                  [-26.096963,27.942634],
                  [-26.09709,27.942461],
                  [-26.097314,27.942222],
                  [-26.100578,27.944391],
                  [-26.102232,27.94551],
                  [-26.104069,27.946755],
                  [-26.102815,27.948489],
                  [-26.101857,27.949855],
                  [-26.101743,27.949945],
                  [-26.101638,27.950014],
                  [-26.101589,27.950036],
                  [-26.101532,27.95007],
                  [-26.101442,27.950112],
                  [-26.101276,27.950174],
                  [-26.101111,27.950247],
                  [-26.100976,27.950303],
                  [-26.100883,27.950345],
                  [-26.100751,27.95043],
                  [-26.100635,27.950525],
                  [-26.100512,27.950652],
                  [-26.100638,27.950756],
                  [-26.100723,27.950823],
                  [-26.100782,27.950888],
                  [-26.100813,27.950967],
                  [-26.100815,27.951051],
                  [-26.100863,27.95111],
                  [-26.100922,27.951096],
                  [-26.100998,27.951074],
                  [-26.101049,27.95111],
                  [-26.101127,27.951186],
                  [-26.101203,27.951296],
                  [-26.101216,27.951328],
                  [-26.10124,27.951389],
                  [-26.101254,27.951473],
                  [-26.101279,27.951566],
                  [-26.101344,27.951628],
                  [-26.101437,27.951704],
                  [-26.101493,27.951774],
                  [-26.101541,27.951878],
                  [-26.101589,27.951957],
                  [-26.101653,27.952035],
                  [-26.101757,27.952184],
                  [-26.101828,27.952294],
                  [-26.101915,27.952395],
                  [-26.101999,27.952513],
                  [-26.102067,27.952645],
                  [-26.102142,27.952755],
                  [-26.102227,27.952893],
                  [-26.102277,27.952991],
                  [-26.10237,27.953053],
                  [-26.102441,27.953121],
                  [-26.102443,27.953211],
                  [-26.102421,27.953371],
                  [-26.102418,27.953514],
                  [-26.102398,27.953661],
                  [-26.102396,27.953793],
                  [-26.102424,27.953908],
                  [-26.102477,27.954001],
                  [-26.102491,27.954122],
                  [-26.102438,27.95438],
                  [-26.102418,27.954456],
                  [-26.102396,27.95456],
                  [-26.102396,27.954687],
                  [-26.102396,27.954774],
                  [-26.102412,27.954861],
                  [-26.102421,27.95499],
                  [-26.102412,27.955156],
                  [-26.10241,27.955325],
                  [-26.102381,27.955457],
                  [-26.102362,27.955598],
                  [-26.102365,27.95575],
                  [-26.10237,27.955918],
                  [-26.10237,27.956067],
                  [-26.102365,27.956202],
                  [-26.102365,27.956382],
                  [-26.10237,27.956537],
                  [-26.102365,27.95668],
                  [-26.10232,27.956767],
                  [-26.102227,27.957006],
                  [-26.102221,27.957113],
                  [-26.102168,27.957265],
                  [-26.102114,27.957383],
                  [-26.102092,27.957518],
                  [-26.102095,27.957617],
                  [-26.102078,27.95774],
                  [-26.102033,27.957903],
                  [-26.102038,27.958064],
                  [-26.102041,27.958196],
                  [-26.10201,27.958336],
                  [-26.101965,27.958477],
                  [-26.101906,27.958705],
                  [-26.101861,27.958924],
                  [-26.101833,27.959233],
                  [-26.101805,27.959453],
                  [-26.101738,27.959672],
                  [-26.101712,27.959838],
                  [-26.101701,27.960021],
                  [-26.101687,27.960142],
                  [-26.10167,27.96023],
                  [-26.101748,27.960238],
                  [-26.10184,27.960249],
                  [-26.102273,27.960295],
                  [-26.102339,27.960302],
                  [-26.102289,27.960712],
                  [-26.102266,27.960949],
                  [-26.102486,27.960971],
                  [-26.10284,27.960968],
                  [-26.10284,27.9611],
                  [-26.10289,27.961137],
                  [-26.103188,27.961753],
                  [-26.103277,27.961881],
                  [-26.103324,27.96195],
                  [-26.102528,27.962405],
                  [-26.100848,27.963374],
                  [-26.098508,27.964707],
                  [-26.098346,27.964826],
                  [-26.095915,27.966149],
                  [-26.095518,27.966347],
                  [-26.095097,27.96653],
                  [-26.09458,27.966737],
                  [-26.094084,27.966911],
                  [-26.093591,27.967062],
                  [-26.092967,27.967225],
                  [-26.092053,27.967456],
                  [-26.091806,27.967516],
                  [-26.091628,27.967559],
                  [-26.089212,27.968167],
                  [-26.087503,27.968604],
                  [-26.087169,27.968687],
                  [-26.085556,27.969085],
                  [-26.08254,27.969848],
                  [-26.081557,27.970099],
                  [-26.080764,27.970301],
                  [-26.079128,27.970734],
                  [-26.078555,27.970869],
                  [-26.077766,27.971054],
                  [-26.077183,27.971206],
                  [-26.076666,27.971386],
                  [-26.075899,27.971682],
                  [-26.07532,27.971928],
                  [-26.074631,27.97226],
                  [-26.074482,27.972342],
                  [-26.074077,27.972564],
                  [-26.073716,27.972769],
                  [-26.073125,27.973155],
                  [-26.072255,27.973733],
                  [-26.070917,27.974587],
                  [-26.069933,27.975239],
                  [-26.069753,27.975353],
                  [-26.06834,27.976253],
                  [-26.067856,27.976577],
                  [-26.067204,27.977075],
                  [-26.067062,27.977182],
                  [-26.066419,27.977735],
                  [-26.065767,27.978348],
                  [-26.065348,27.978786],
                  [-26.065009,27.979153],
                  [-26.064604,27.979618],
                  [-26.0641,27.980226],
                  [-26.061623,27.983138],
                  [-26.059525,27.985611],
                  [-26.059505,27.985633],
                  [-26.059147,27.98518],
                  [-26.059091,27.985031],
                  [-26.059058,27.98495],
                  [-26.058843,27.984679],
                  [-26.058742,27.984658],
                  [-26.05859,27.984485],
                  [-26.057644,27.983307],
                  [-26.057424,27.983104],
                  [-26.057346,27.983203],
                  [-26.057266,27.983289],
                  [-26.057212,27.98337],
                  [-26.057116,27.983447],
                  [-26.057027,27.983504],
                  [-26.056961,27.983549],
                  [-26.056878,27.983465],
                  [-26.055049,27.981816],
                  [-26.054958,27.981726],
                  [-26.055117,27.981512],
                  [-26.055249,27.981313],
                  [-26.054887,27.980992],
                  [-26.054477,27.98063],
                  [-26.055776,27.978851],
                  [-26.056103,27.978405],
                  [-26.057013,27.977175],
                  [-26.057076,27.977118],
                  [-26.057659,27.976836],
                  [-26.057621,27.975448],
                  [-26.057597,27.975387],
                  [-26.057531,27.975328],
                  [-26.057456,27.975313],
                  [-26.056926,27.975378],
                  [-26.056219,27.97545],
                  [-26.056182,27.9749],
                  [-26.056152,27.974552],
                  [-26.056106,27.974465],
                  [-26.056037,27.974408],
                  [-26.055959,27.974396],
                  [-26.055107,27.974477],
                  [-26.054848,27.974501],
                  [-26.054591,27.974526],
                  [-26.054076,27.974575],
                  [-26.053977,27.974575],
                  [-26.053683,27.974513],
                  [-26.053795,27.974018],
                  [-26.053674,27.974024]
                ];

/* list of polygons */
var poly_dict = {'Randburg': RandburgCoords}

for (key in poly_dict){
  console.log(poly_dict[key])
  for (var i = 0; i < spoint.length; i++){
    if(inside(spoint[i], poly_dict[key])) {
      console.log("fuck yes")
      dict.push({
        co: spoint[i],
        ward: RandburgCoords[0]
      });
    }
    else {
      console.log("kill yourself")
      /* take this out to avoid overwriting the dict */
      dict.push({
        co: spoint[i],
        ward: "not found"
      })
    }

  }
};

for (var places in poly){
  console.log(places.place);
};


/* list of points to search */
var spoint = [[-26.063510, 27.969883], [-26.063327, 27.967909], [-25.971693, 27.860272], [-26.113240, 28.004830]];

var dict = [];

/* if statement using 'contains' to check */
for (var i = 0; i < spoint.length; i++){
  if(inside(spoint[i], RandburgCoords[1])) {
    console.log("fuck yes")
    dict.push({
      co: spoint[i],
      ward: RandburgCoords[0]
    });
  }
  else {
    console.log("kill yourself")
    /* take this out to avoid overwriting the dict */
    dict.push({
      co: spoint[i],
      ward: "not found"
    })
  }

}

Object.keys(dict).map(function(k){
    return dict[k];
}).join(',');

console.log(dict)
