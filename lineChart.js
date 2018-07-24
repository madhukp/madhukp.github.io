//console.log("line chart START");
var svg = d3.select(".viz4"),
    margin = {top: 90, right: 100, bottom: 140, left: 50},
    margin2 = {top: 480, right: 100, bottom: 50, left: 50},
    width = +svg.attr("width") - margin.left - margin.right - 80,
    height = +svg.attr("height") - margin.top - margin.bottom - 5,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;

///////////////////////// DATA START 
///////////////////////// DATA START 
///////////////////////// DATA START 
var regDataBool = [1,1,1,1,1,0];

var xValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman & Nicobar", "Chandigarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Lakshadweep", "Puducherry"];

//regionColors = ["#2d81bc","#db3f40","#ed8123","#2bb6c4","#b1b22a", "#4e964e"];
//regionColors = ["#1f77b4", "#d62728", "#ff7f0e", "#9467bd", "#8c564b", "#2ca02c"];
regionColors = ["#1f77b4", "#d62728", "#ff7f0e", "#2ca02c", "#8c564b", "#9467bd"];


var
st00S = [{'count':9679, 'statei':0, 'regioni': 1, 'yr':2001},{'count':10552, 'statei':0, 'regioni': 1, 'yr':2002},{'count':9679, 'statei':0, 'regioni': 1, 'yr':2003},{'count':10552, 'statei':0, 'regioni': 1, 'yr':2004},{'count':10534, 'statei':0, 'regioni': 1, 'yr':2005},{'count':12761, 'statei':0, 'regioni': 1, 'yr':2006},{'count':13549, 'statei':0, 'regioni': 1, 'yr':2007},{'count':13812, 'statei':0, 'regioni': 1, 'yr':2008},{'count':14770, 'statei':0, 'regioni': 1, 'yr':2009},{'count':15684, 'statei':0, 'regioni': 1, 'yr':2010},{'count':15165, 'statei':0, 'regioni': 1, 'yr':2011},{'count':14964, 'statei':0, 'regioni': 1, 'yr':2012},{'count':14171, 'statei':0, 'regioni': 1, 'yr':2013},{'count':7908, 'statei':0, 'regioni': 1, 'yr':2014},{'count':8297, 'statei':0, 'regioni': 1, 'yr':2015},{'count':10234, 'statei':0, 'regioni': 1, 'yr':2016}],
st01E = [{'count':127, 'statei':1, 'regioni': 2, 'yr':2001},{'count':166, 'statei':1, 'regioni': 2, 'yr':2002},{'count':127, 'statei':1, 'regioni': 2, 'yr':2003},{'count':166, 'statei':1, 'regioni': 2, 'yr':2004},{'count':87, 'statei':1, 'regioni': 2, 'yr':2005},{'count':129, 'statei':1, 'regioni': 2, 'yr':2006},{'count':95, 'statei':1, 'regioni': 2, 'yr':2007},{'count':134, 'statei':1, 'regioni': 2, 'yr':2008},{'count':158, 'statei':1, 'regioni': 2, 'yr':2009},{'count':148, 'statei':1, 'regioni': 2, 'yr':2010},{'count':126, 'statei':1, 'regioni': 2, 'yr':2011},{'count':138, 'statei':1, 'regioni': 2, 'yr':2012},{'count':143, 'statei':1, 'regioni': 2, 'yr':2013},{'count':119, 'statei':1, 'regioni': 2, 'yr':2014},{'count':127, 'statei':1, 'regioni': 2, 'yr':2015},{'count':143, 'statei':1, 'regioni': 2, 'yr':2016}],
st02E = [{'count':1122, 'statei':2, 'regioni': 2, 'yr':2001},{'count':1288, 'statei':2, 'regioni': 2, 'yr':2002},{'count':1122, 'statei':2, 'regioni': 2, 'yr':2003},{'count':1288, 'statei':2, 'regioni': 2, 'yr':2004},{'count':1544, 'statei':2, 'regioni': 2, 'yr':2005},{'count':1841, 'statei':2, 'regioni': 2, 'yr':2006},{'count':1604, 'statei':2, 'regioni': 2, 'yr':2007},{'count':1807, 'statei':2, 'regioni': 2, 'yr':2008},{'count':1991, 'statei':2, 'regioni': 2, 'yr':2009},{'count':2256, 'statei':2, 'regioni': 2, 'yr':2010},{'count':2342, 'statei':2, 'regioni': 2, 'yr':2011},{'count':2291, 'statei':2, 'regioni': 2, 'yr':2012},{'count':2441, 'statei':2, 'regioni': 2, 'yr':2013},{'count':2522, 'statei':2, 'regioni': 2, 'yr':2014},{'count':2397, 'statei':2, 'regioni': 2, 'yr':2015},{'count':2441, 'statei':2, 'regioni': 2, 'yr':2016}],
st03E = [{'count':2368, 'statei':3, 'regioni': 2, 'yr':2001},{'count':1791, 'statei':3, 'regioni': 2, 'yr':2002},{'count':2368, 'statei':3, 'regioni': 2, 'yr':2003},{'count':1791, 'statei':3, 'regioni': 2, 'yr':2004},{'count':1588, 'statei':3, 'regioni': 2, 'yr':2005},{'count':2396, 'statei':3, 'regioni': 2, 'yr':2006},{'count':3482, 'statei':3, 'regioni': 2, 'yr':2007},{'count':3940, 'statei':3, 'regioni': 2, 'yr':2008},{'count':4390, 'statei':3, 'regioni': 2, 'yr':2009},{'count':5137, 'statei':3, 'regioni': 2, 'yr':2010},{'count':5090, 'statei':3, 'regioni': 2, 'yr':2011},{'count':5056, 'statei':3, 'regioni': 2, 'yr':2012},{'count':5061, 'statei':3, 'regioni': 2, 'yr':2013},{'count':4913, 'statei':3, 'regioni': 2, 'yr':2014},{'count':5421, 'statei':3, 'regioni': 2, 'yr':2015},{'count':5061, 'statei':3, 'regioni': 2, 'yr':2016}],
st04C = [{'count':1881, 'statei':4, 'regioni': 4, 'yr':2001},{'count':2060, 'statei':4, 'regioni': 4, 'yr':2002},{'count':1881, 'statei':4, 'regioni': 4, 'yr':2003},{'count':2060, 'statei':4, 'regioni': 4, 'yr':2004},{'count':2258, 'statei':4, 'regioni': 4, 'yr':2005},{'count':2374, 'statei':4, 'regioni': 4, 'yr':2006},{'count':2607, 'statei':4, 'regioni': 4, 'yr':2007},{'count':2966, 'statei':4, 'regioni': 4, 'yr':2008},{'count':2865, 'statei':4, 'regioni': 4, 'yr':2009},{'count':2956, 'statei':4, 'regioni': 4, 'yr':2010},{'count':2983, 'statei':4, 'regioni': 4, 'yr':2011},{'count':3167, 'statei':4, 'regioni': 4, 'yr':2012},{'count':3477, 'statei':4, 'regioni': 4, 'yr':2013},{'count':4022, 'statei':4, 'regioni': 4, 'yr':2014},{'count':4082, 'statei':4, 'regioni': 4, 'yr':2015},{'count':3477, 'statei':4, 'regioni': 4, 'yr':2016}],
st05W = [{'count':235, 'statei':5, 'regioni': 3, 'yr':2001},{'count':306, 'statei':5, 'regioni': 3, 'yr':2002},{'count':235, 'statei':5, 'regioni': 3, 'yr':2003},{'count':306, 'statei':5, 'regioni': 3, 'yr':2004},{'count':242, 'statei':5, 'regioni': 3, 'yr':2005},{'count':303, 'statei':5, 'regioni': 3, 'yr':2006},{'count':322, 'statei':5, 'regioni': 3, 'yr':2007},{'count':318, 'statei':5, 'regioni': 3, 'yr':2008},{'count':321, 'statei':5, 'regioni': 3, 'yr':2009},{'count':327, 'statei':5, 'regioni': 3, 'yr':2010},{'count':333, 'statei':5, 'regioni': 3, 'yr':2011},{'count':292, 'statei':5, 'regioni': 3, 'yr':2012},{'count':266, 'statei':5, 'regioni': 3, 'yr':2013},{'count':290, 'statei':5, 'regioni': 3, 'yr':2014},{'count':311, 'statei':5, 'regioni': 3, 'yr':2015},{'count':266, 'statei':5, 'regioni': 3, 'yr':2016}],
st06W = [{'count':5161, 'statei':6, 'regioni': 3, 'yr':2001},{'count':5423, 'statei':6, 'regioni': 3, 'yr':2002},{'count':5161, 'statei':6, 'regioni': 3, 'yr':2003},{'count':5423, 'statei':6, 'regioni': 3, 'yr':2004},{'count':5642, 'statei':6, 'regioni': 3, 'yr':2005},{'count':6161, 'statei':6, 'regioni': 3, 'yr':2006},{'count':6915, 'statei':6, 'regioni': 3, 'yr':2007},{'count':7070, 'statei':6, 'regioni': 3, 'yr':2008},{'count':6983, 'statei':6, 'regioni': 3, 'yr':2009},{'count':7506, 'statei':6, 'regioni': 3, 'yr':2010},{'count':8008, 'statei':6, 'regioni': 3, 'yr':2011},{'count':7817, 'statei':6, 'regioni': 3, 'yr':2012},{'count':7613, 'statei':6, 'regioni': 3, 'yr':2013},{'count':7955, 'statei':6, 'regioni': 3, 'yr':2014},{'count':8119, 'statei':6, 'regioni': 3, 'yr':2015},{'count':7613, 'statei':6, 'regioni': 3, 'yr':2016}],
st07N = [{'count':3028, 'statei':7, 'regioni': 0, 'yr':2001},{'count':3417, 'statei':7, 'regioni': 0, 'yr':2002},{'count':3028, 'statei':7, 'regioni': 0, 'yr':2003},{'count':3417, 'statei':7, 'regioni': 0, 'yr':2004},{'count':3379, 'statei':7, 'regioni': 0, 'yr':2005},{'count':4012, 'statei':7, 'regioni': 0, 'yr':2006},{'count':4415, 'statei':7, 'regioni': 0, 'yr':2007},{'count':4494, 'statei':7, 'regioni': 0, 'yr':2008},{'count':4603, 'statei':7, 'regioni': 0, 'yr':2009},{'count':4719, 'statei':7, 'regioni': 0, 'yr':2010},{'count':4762, 'statei':7, 'regioni': 0, 'yr':2011},{'count':4446, 'statei':7, 'regioni': 0, 'yr':2012},{'count':4517, 'statei':7, 'regioni': 0, 'yr':2013},{'count':4483, 'statei':7, 'regioni': 0, 'yr':2014},{'count':4879, 'statei':7, 'regioni': 0, 'yr':2015},{'count':4415, 'statei':7, 'regioni': 0, 'yr':2016}],
st08N = [{'count':733, 'statei':8, 'regioni': 0, 'yr':2001},{'count':836, 'statei':8, 'regioni': 0, 'yr':2002},{'count':733, 'statei':8, 'regioni': 0, 'yr':2003},{'count':836, 'statei':8, 'regioni': 0, 'yr':2004},{'count':812, 'statei':8, 'regioni': 0, 'yr':2005},{'count':867, 'statei':8, 'regioni': 0, 'yr':2006},{'count':979, 'statei':8, 'regioni': 0, 'yr':2007},{'count':848, 'statei':8, 'regioni': 0, 'yr':2008},{'count':1140, 'statei':8, 'regioni': 0, 'yr':2009},{'count':1102, 'statei':8, 'regioni': 0, 'yr':2010},{'count':1072, 'statei':8, 'regioni': 0, 'yr':2011},{'count':1109, 'statei':8, 'regioni': 0, 'yr':2012},{'count':1054, 'statei':8, 'regioni': 0, 'yr':2013},{'count':1199, 'statei':8, 'regioni': 0, 'yr':2014},{'count':1096, 'statei':8, 'regioni': 0, 'yr':2015},{'count':848, 'statei':8, 'regioni': 0, 'yr':2016}],
st09N = [{'count':836, 'statei':9, 'regioni': 0, 'yr':2001},{'count':958, 'statei':9, 'regioni': 0, 'yr':2002},{'count':836, 'statei':9, 'regioni': 0, 'yr':2003},{'count':958, 'statei':9, 'regioni': 0, 'yr':2004},{'count':884, 'statei':9, 'regioni': 0, 'yr':2005},{'count':989, 'statei':9, 'regioni': 0, 'yr':2006},{'count':958, 'statei':9, 'regioni': 0, 'yr':2007},{'count':950, 'statei':9, 'regioni': 0, 'yr':2008},{'count':1100, 'statei':9, 'regioni': 0, 'yr':2009},{'count':1045, 'statei':9, 'regioni': 0, 'yr':2010},{'count':1116, 'statei':9, 'regioni': 0, 'yr':2011},{'count':1165, 'statei':9, 'regioni': 0, 'yr':2012},{'count':990, 'statei':9, 'regioni': 0, 'yr':2013},{'count':992, 'statei':9, 'regioni': 0, 'yr':2014},{'count':917, 'statei':9, 'regioni': 0, 'yr':2015},{'count':1165, 'statei':9, 'regioni': 0, 'yr':2016}],
st10E = [{'count':1699, 'statei':10, 'regioni': 2, 'yr':2001},{'count':1869, 'statei':10, 'regioni': 2, 'yr':2002},{'count':1699, 'statei':10, 'regioni': 2, 'yr':2003},{'count':1869, 'statei':10, 'regioni': 2, 'yr':2004},{'count':1919, 'statei':10, 'regioni': 2, 'yr':2005},{'count':1914, 'statei':10, 'regioni': 2, 'yr':2006},{'count':2081, 'statei':10, 'regioni': 2, 'yr':2007},{'count':1979, 'statei':10, 'regioni': 2, 'yr':2008},{'count':2170, 'statei':10, 'regioni': 2, 'yr':2009},{'count':2540, 'statei':10, 'regioni': 2, 'yr':2010},{'count':2572, 'statei':10, 'regioni': 2, 'yr':2011},{'count':2818, 'statei':10, 'regioni': 2, 'yr':2012},{'count':2706, 'statei':10, 'regioni': 2, 'yr':2013},{'count':2628, 'statei':10, 'regioni': 2, 'yr':2014},{'count':2893, 'statei':10, 'regioni': 2, 'yr':2015},{'count':4534, 'statei':10, 'regioni': 2, 'yr':2016}],
st11S = [{'count':6195, 'statei':11, 'regioni': 1, 'yr':2001},{'count':6496, 'statei':11, 'regioni': 1, 'yr':2002},{'count':6195, 'statei':11, 'regioni': 1, 'yr':2003},{'count':6496, 'statei':11, 'regioni': 1, 'yr':2004},{'count':6904, 'statei':11, 'regioni': 1, 'yr':2005},{'count':7973, 'statei':11, 'regioni': 1, 'yr':2006},{'count':8777, 'statei':11, 'regioni': 1, 'yr':2007},{'count':8814, 'statei':11, 'regioni': 1, 'yr':2008},{'count':8714, 'statei':11, 'regioni': 1, 'yr':2009},{'count':9590, 'statei':11, 'regioni': 1, 'yr':2010},{'count':8971, 'statei':11, 'regioni': 1, 'yr':2011},{'count':9448, 'statei':11, 'regioni': 1, 'yr':2012},{'count':10046, 'statei':11, 'regioni': 1, 'yr':2013},{'count':10452, 'statei':11, 'regioni': 1, 'yr':2014},{'count':10856, 'statei':11, 'regioni': 1, 'yr':2015},{'count':9590, 'statei':11, 'regioni': 1, 'yr':2016}],
st12S = [{'count':2905, 'statei':12, 'regioni': 1, 'yr':2001},{'count':3059, 'statei':12, 'regioni': 1, 'yr':2002},{'count':2905, 'statei':12, 'regioni': 1, 'yr':2003},{'count':3059, 'statei':12, 'regioni': 1, 'yr':2004},{'count':3161, 'statei':12, 'regioni': 1, 'yr':2005},{'count':3627, 'statei':12, 'regioni': 1, 'yr':2006},{'count':3778, 'statei':12, 'regioni': 1, 'yr':2007},{'count':3901, 'statei':12, 'regioni': 1, 'yr':2008},{'count':3830, 'statei':12, 'regioni': 1, 'yr':2009},{'count':3950, 'statei':12, 'regioni': 1, 'yr':2010},{'count':4145, 'statei':12, 'regioni': 1, 'yr':2011},{'count':4286, 'statei':12, 'regioni': 1, 'yr':2012},{'count':4258, 'statei':12, 'regioni': 1, 'yr':2013},{'count':4049, 'statei':12, 'regioni': 1, 'yr':2014},{'count':4196, 'statei':12, 'regioni': 1, 'yr':2015},{'count':5633, 'statei':12, 'regioni': 1, 'yr':2016}],
st13C = [{'count':4523, 'statei':13, 'regioni': 4, 'yr':2001},{'count':4703, 'statei':13, 'regioni': 4, 'yr':2002},{'count':4523, 'statei':13, 'regioni': 4, 'yr':2003},{'count':4703, 'statei':13, 'regioni': 4, 'yr':2004},{'count':5327, 'statei':13, 'regioni': 4, 'yr':2005},{'count':5318, 'statei':13, 'regioni': 4, 'yr':2006},{'count':6671, 'statei':13, 'regioni': 4, 'yr':2007},{'count':6670, 'statei':13, 'regioni': 4, 'yr':2008},{'count':7365, 'statei':13, 'regioni': 4, 'yr':2009},{'count':8085, 'statei':13, 'regioni': 4, 'yr':2010},{'count':7869, 'statei':13, 'regioni': 4, 'yr':2011},{'count':8175, 'statei':13, 'regioni': 4, 'yr':2012},{'count':8588, 'statei':13, 'regioni': 4, 'yr':2013},{'count':8569, 'statei':13, 'regioni': 4, 'yr':2014},{'count':9314, 'statei':13, 'regioni': 4, 'yr':2015},{'count':10233, 'statei':13, 'regioni': 4, 'yr':2016}],
st14W = [{'count':9483, 'statei':14, 'regioni': 3, 'yr':2001},{'count':9875, 'statei':14, 'regioni': 3, 'yr':2002},{'count':9483, 'statei':14, 'regioni': 3, 'yr':2003},{'count':9875, 'statei':14, 'regioni': 3, 'yr':2004},{'count':10259, 'statei':14, 'regioni': 3, 'yr':2005},{'count':11343, 'statei':14, 'regioni': 3, 'yr':2006},{'count':11212, 'statei':14, 'regioni': 3, 'yr':2007},{'count':12397, 'statei':14, 'regioni': 3, 'yr':2008},{'count':11396, 'statei':14, 'regioni': 3, 'yr':2009},{'count':12340, 'statei':14, 'regioni': 3, 'yr':2010},{'count':13057, 'statei':14, 'regioni': 3, 'yr':2011},{'count':13333, 'statei':14, 'regioni': 3, 'yr':2012},{'count':13029, 'statei':14, 'regioni': 3, 'yr':2013},{'count':12803, 'statei':14, 'regioni': 3, 'yr':2014},{'count':13212, 'statei':14, 'regioni': 3, 'yr':2015},{'count':8324, 'statei':14, 'regioni': 3, 'yr':2016}],
st15E = [{'count':127, 'statei':15, 'regioni': 2, 'yr':2001},{'count':115, 'statei':15, 'regioni': 2, 'yr':2002},{'count':127, 'statei':15, 'regioni': 2, 'yr':2003},{'count':115, 'statei':15, 'regioni': 2, 'yr':2004},{'count':137, 'statei':15, 'regioni': 2, 'yr':2005},{'count':159, 'statei':15, 'regioni': 2, 'yr':2006},{'count':114, 'statei':15, 'regioni': 2, 'yr':2007},{'count':151, 'statei':15, 'regioni': 2, 'yr':2008},{'count':125, 'statei':15, 'regioni': 2, 'yr':2009},{'count':154, 'statei':15, 'regioni': 2, 'yr':2010},{'count':158, 'statei':15, 'regioni': 2, 'yr':2011},{'count':158, 'statei':15, 'regioni': 2, 'yr':2012},{'count':165, 'statei':15, 'regioni': 2, 'yr':2013},{'count':168, 'statei':15, 'regioni': 2, 'yr':2014},{'count':139, 'statei':15, 'regioni': 2, 'yr':2015},{'count':146, 'statei':15, 'regioni': 2, 'yr':2016}],
st16E = [{'count':168, 'statei':16, 'regioni': 2, 'yr':2001},{'count':135, 'statei':16, 'regioni': 2, 'yr':2002},{'count':168, 'statei':16, 'regioni': 2, 'yr':2003},{'count':135, 'statei':16, 'regioni': 2, 'yr':2004},{'count':126, 'statei':16, 'regioni': 2, 'yr':2005},{'count':165, 'statei':16, 'regioni': 2, 'yr':2006},{'count':127, 'statei':16, 'regioni': 2, 'yr':2007},{'count':123, 'statei':16, 'regioni': 2, 'yr':2008},{'count':145, 'statei':16, 'regioni': 2, 'yr':2009},{'count':163, 'statei':16, 'regioni': 2, 'yr':2010},{'count':212, 'statei':16, 'regioni': 2, 'yr':2011},{'count':219, 'statei':16, 'regioni': 2, 'yr':2012},{'count':130, 'statei':16, 'regioni': 2, 'yr':2013},{'count':141, 'statei':16, 'regioni': 2, 'yr':2014},{'count':183, 'statei':16, 'regioni': 2, 'yr':2015},{'count':300, 'statei':16, 'regioni': 2, 'yr':2016}],
st17E = [{'count':76, 'statei':17, 'regioni': 2, 'yr':2001},{'count':59, 'statei':17, 'regioni': 2, 'yr':2002},{'count':76, 'statei':17, 'regioni': 2, 'yr':2003},{'count':59, 'statei':17, 'regioni': 2, 'yr':2004},{'count':59, 'statei':17, 'regioni': 2, 'yr':2005},{'count':64, 'statei':17, 'regioni': 2, 'yr':2006},{'count':50, 'statei':17, 'regioni': 2, 'yr':2007},{'count':63, 'statei':17, 'regioni': 2, 'yr':2008},{'count':60, 'statei':17, 'regioni': 2, 'yr':2009},{'count':82, 'statei':17, 'regioni': 2, 'yr':2010},{'count':81, 'statei':17, 'regioni': 2, 'yr':2011},{'count':77, 'statei':17, 'regioni': 2, 'yr':2012},{'count':97, 'statei':17, 'regioni': 2, 'yr':2013},{'count':103, 'statei':17, 'regioni': 2, 'yr':2014},{'count':72, 'statei':17, 'regioni': 2, 'yr':2015},{'count':40, 'statei':17, 'regioni': 2, 'yr':2016}],
st18E = [{'count':46, 'statei':18, 'regioni': 2, 'yr':2001},{'count':60, 'statei':18, 'regioni': 2, 'yr':2002},{'count':46, 'statei':18, 'regioni': 2, 'yr':2003},{'count':60, 'statei':18, 'regioni': 2, 'yr':2004},{'count':52, 'statei':18, 'regioni': 2, 'yr':2005},{'count':68, 'statei':18, 'regioni': 2, 'yr':2006},{'count':89, 'statei':18, 'regioni': 2, 'yr':2007},{'count':70, 'statei':18, 'regioni': 2, 'yr':2008},{'count':55, 'statei':18, 'regioni': 2, 'yr':2009},{'count':40, 'statei':18, 'regioni': 2, 'yr':2010},{'count':25, 'statei':18, 'regioni': 2, 'yr':2011},{'count':56, 'statei':18, 'regioni': 2, 'yr':2012},{'count':30, 'statei':18, 'regioni': 2, 'yr':2013},{'count':81, 'statei':18, 'regioni': 2, 'yr':2014},{'count':30, 'statei':18, 'regioni': 2, 'yr':2015},{'count':60, 'statei':18, 'regioni': 2, 'yr':2016}],
st19E = [{'count':2293, 'statei':19, 'regioni': 2, 'yr':2001},{'count':2454, 'statei':19, 'regioni': 2, 'yr':2002},{'count':2293, 'statei':19, 'regioni': 2, 'yr':2003},{'count':2454, 'statei':19, 'regioni': 2, 'yr':2004},{'count':2549, 'statei':19, 'regioni': 2, 'yr':2005},{'count':2755, 'statei':19, 'regioni': 2, 'yr':2006},{'count':3000, 'statei':19, 'regioni': 2, 'yr':2007},{'count':3079, 'statei':19, 'regioni': 2, 'yr':2008},{'count':3527, 'statei':19, 'regioni': 2, 'yr':2009},{'count':3837, 'statei':19, 'regioni': 2, 'yr':2010},{'count':3802, 'statei':19, 'regioni': 2, 'yr':2011},{'count':3701, 'statei':19, 'regioni': 2, 'yr':2012},{'count':4062, 'statei':19, 'regioni': 2, 'yr':2013},{'count':3931, 'statei':19, 'regioni': 2, 'yr':2014},{'count':4303, 'statei':19, 'regioni': 2, 'yr':2015},{'count':4062, 'statei':19, 'regioni': 2, 'yr':2016}],
st20N = [{'count':2655, 'statei':20, 'regioni': 0, 'yr':2001},{'count':2580, 'statei':20, 'regioni': 0, 'yr':2002},{'count':2655, 'statei':20, 'regioni': 0, 'yr':2003},{'count':2580, 'statei':20, 'regioni': 0, 'yr':2004},{'count':2793, 'statei':20, 'regioni': 0, 'yr':2005},{'count':3052, 'statei':20, 'regioni': 0, 'yr':2006},{'count':3363, 'statei':20, 'regioni': 0, 'yr':2007},{'count':3206, 'statei':20, 'regioni': 0, 'yr':2008},{'count':3668, 'statei':20, 'regioni': 0, 'yr':2009},{'count':3542, 'statei':20, 'regioni': 0, 'yr':2010},{'count':4931, 'statei':20, 'regioni': 0, 'yr':2011},{'count':4820, 'statei':20, 'regioni': 0, 'yr':2012},{'count':4588, 'statei':20, 'regioni': 0, 'yr':2013},{'count':4621, 'statei':20, 'regioni': 0, 'yr':2014},{'count':4893, 'statei':20, 'regioni': 0, 'yr':2015},{'count':4588, 'statei':20, 'regioni': 0, 'yr':2016}],
st21W = [{'count':6025, 'statei':21, 'regioni': 3, 'yr':2001},{'count':6477, 'statei':21, 'regioni': 3, 'yr':2002},{'count':6025, 'statei':21, 'regioni': 3, 'yr':2003},{'count':6477, 'statei':21, 'regioni': 3, 'yr':2004},{'count':6793, 'statei':21, 'regioni': 3, 'yr':2005},{'count':7154, 'statei':21, 'regioni': 3, 'yr':2006},{'count':8145, 'statei':21, 'regioni': 3, 'yr':2007},{'count':8388, 'statei':21, 'regioni': 3, 'yr':2008},{'count':9045, 'statei':21, 'regioni': 3, 'yr':2009},{'count':9163, 'statei':21, 'regioni': 3, 'yr':2010},{'count':9232, 'statei':21, 'regioni': 3, 'yr':2011},{'count':9528, 'statei':21, 'regioni': 3, 'yr':2012},{'count':9724, 'statei':21, 'regioni': 3, 'yr':2013},{'count':10289, 'statei':21, 'regioni': 3, 'yr':2014},{'count':10510, 'statei':21, 'regioni': 3, 'yr':2015},{'count':9724, 'statei':21, 'regioni': 3, 'yr':2016}],
st22E = [{'count':40, 'statei':22, 'regioni': 2, 'yr':2001},{'count':51, 'statei':22, 'regioni': 2, 'yr':2002},{'count':40, 'statei':22, 'regioni': 2, 'yr':2003},{'count':51, 'statei':22, 'regioni': 2, 'yr':2004},{'count':77, 'statei':22, 'regioni': 2, 'yr':2005},{'count':70, 'statei':22, 'regioni': 2, 'yr':2006},{'count':52, 'statei':22, 'regioni': 2, 'yr':2007},{'count':79, 'statei':22, 'regioni': 2, 'yr':2008},{'count':87, 'statei':22, 'regioni': 2, 'yr':2009},{'count':71, 'statei':22, 'regioni': 2, 'yr':2010},{'count':106, 'statei':22, 'regioni': 2, 'yr':2011},{'count':55, 'statei':22, 'regioni': 2, 'yr':2012},{'count':68, 'statei':22, 'regioni': 2, 'yr':2013},{'count':59, 'statei':22, 'regioni': 2, 'yr':2014},{'count':70, 'statei':22, 'regioni': 2, 'yr':2015},{'count':68, 'statei':22, 'regioni': 2, 'yr':2016}],
st23S = [{'count':9275, 'statei':23, 'regioni': 1, 'yr':2001},{'count':9507, 'statei':23, 'regioni': 1, 'yr':2002},{'count':9275, 'statei':23, 'regioni': 1, 'yr':2003},{'count':9507, 'statei':23, 'regioni': 1, 'yr':2004},{'count':9758, 'statei':23, 'regioni': 1, 'yr':2005},{'count':11009, 'statei':23, 'regioni': 1, 'yr':2006},{'count':12036, 'statei':23, 'regioni': 1, 'yr':2007},{'count':12784, 'statei':23, 'regioni': 1, 'yr':2008},{'count':13746, 'statei':23, 'regioni': 1, 'yr':2009},{'count':15409, 'statei':23, 'regioni': 1, 'yr':2010},{'count':15422, 'statei':23, 'regioni': 1, 'yr':2011},{'count':16175, 'statei':23, 'regioni': 1, 'yr':2012},{'count':15563, 'statei':23, 'regioni': 1, 'yr':2013},{'count':15190, 'statei':23, 'regioni': 1, 'yr':2014},{'count':15642, 'statei':23, 'regioni': 1, 'yr':2015},{'count':17022, 'statei':23, 'regioni': 1, 'yr':2016}],
st24S = [{'count':0, 'statei':24, 'regioni': 1, 'yr':2001},{'count':0, 'statei':24, 'regioni': 1, 'yr':2002},{'count':0, 'statei':24, 'regioni': 1, 'yr':2003},{'count':0, 'statei':24, 'regioni': 1, 'yr':2004},{'count':0, 'statei':24, 'regioni': 1, 'yr':2005},{'count':0, 'statei':24, 'regioni': 1, 'yr':2006},{'count':0, 'statei':24, 'regioni': 1, 'yr':2007},{'count':0, 'statei':24, 'regioni': 1, 'yr':2008},{'count':0, 'statei':24, 'regioni': 1, 'yr':2009},{'count':0, 'statei':24, 'regioni': 1, 'yr':2010},{'count':0, 'statei':24, 'regioni': 1, 'yr':2011},{'count':0, 'statei':24, 'regioni': 1, 'yr':2012},{'count':0, 'statei':24, 'regioni': 1, 'yr':2013},{'count':6906, 'statei':24, 'regioni': 1, 'yr':2014},{'count':7110, 'statei':24, 'regioni': 1, 'yr':2015},{'count':8023, 'statei':24, 'regioni': 1, 'yr':2016}],
st25E = [{'count':168, 'statei':25, 'regioni': 2, 'yr':2001},{'count':181, 'statei':25, 'regioni': 2, 'yr':2002},{'count':168, 'statei':25, 'regioni': 2, 'yr':2003},{'count':181, 'statei':25, 'regioni': 2, 'yr':2004},{'count':209, 'statei':25, 'regioni': 2, 'yr':2005},{'count':196, 'statei':25, 'regioni': 2, 'yr':2006},{'count':223, 'statei':25, 'regioni': 2, 'yr':2007},{'count':221, 'statei':25, 'regioni': 2, 'yr':2008},{'count':229, 'statei':25, 'regioni': 2, 'yr':2009},{'count':231, 'statei':25, 'regioni': 2, 'yr':2010},{'count':245, 'statei':25, 'regioni': 2, 'yr':2011},{'count':272, 'statei':25, 'regioni': 2, 'yr':2012},{'count':226, 'statei':25, 'regioni': 2, 'yr':2013},{'count':188, 'statei':25, 'regioni': 2, 'yr':2014},{'count':158, 'statei':25, 'regioni': 2, 'yr':2015},{'count':221, 'statei':25, 'regioni': 2, 'yr':2016}],
st26N = [{'count':756, 'statei':26, 'regioni': 0, 'yr':2001},{'count':931, 'statei':26, 'regioni': 0, 'yr':2002},{'count':756, 'statei':26, 'regioni': 0, 'yr':2003},{'count':931, 'statei':26, 'regioni': 0, 'yr':2004},{'count':868, 'statei':26, 'regioni': 0, 'yr':2005},{'count':975, 'statei':26, 'regioni': 0, 'yr':2006},{'count':992, 'statei':26, 'regioni': 0, 'yr':2007},{'count':1073, 'statei':26, 'regioni': 0, 'yr':2008},{'count':852, 'statei':26, 'regioni': 0, 'yr':2009},{'count':931, 'statei':26, 'regioni': 0, 'yr':2010},{'count':937, 'statei':26, 'regioni': 0, 'yr':2011},{'count':844, 'statei':26, 'regioni': 0, 'yr':2012},{'count':766, 'statei':26, 'regioni': 0, 'yr':2013},{'count':878, 'statei':26, 'regioni': 0, 'yr':2014},{'count':913, 'statei':26, 'regioni': 0, 'yr':2015},{'count':975, 'statei':26, 'regioni': 0, 'yr':2016}],
st27N = [{'count':7845, 'statei':27, 'regioni': 0, 'yr':2001},{'count':9946, 'statei':27, 'regioni': 0, 'yr':2002},{'count':7845, 'statei':27, 'regioni': 0, 'yr':2003},{'count':9946, 'statei':27, 'regioni': 0, 'yr':2004},{'count':9955, 'statei':27, 'regioni': 0, 'yr':2005},{'count':10851, 'statei':27, 'regioni': 0, 'yr':2006},{'count':11398, 'statei':27, 'regioni': 0, 'yr':2007},{'count':13165, 'statei':27, 'regioni': 0, 'yr':2008},{'count':14638, 'statei':27, 'regioni': 0, 'yr':2009},{'count':15175, 'statei':27, 'regioni': 0, 'yr':2010},{'count':21512, 'statei':27, 'regioni': 0, 'yr':2011},{'count':16149, 'statei':27, 'regioni': 0, 'yr':2012},{'count':16004, 'statei':27, 'regioni': 0, 'yr':2013},{'count':16287, 'statei':27, 'regioni': 0, 'yr':2014},{'count':17666, 'statei':27, 'regioni': 0, 'yr':2015},{'count':10851, 'statei':27, 'regioni': 0, 'yr':2016}],
st28E = [{'count':4361, 'statei':28, 'regioni': 2, 'yr':2001},{'count':4994, 'statei':28, 'regioni': 2, 'yr':2002},{'count':4361, 'statei':28, 'regioni': 2, 'yr':2003},{'count':4994, 'statei':28, 'regioni': 2, 'yr':2004},{'count':4727, 'statei':28, 'regioni': 2, 'yr':2005},{'count':4600, 'statei':28, 'regioni': 2, 'yr':2006},{'count':4745, 'statei':28, 'regioni': 2, 'yr':2007},{'count':4789, 'statei':28, 'regioni': 2, 'yr':2008},{'count':4860, 'statei':28, 'regioni': 2, 'yr':2009},{'count':5680, 'statei':28, 'regioni': 2, 'yr':2010},{'count':5664, 'statei':28, 'regioni': 2, 'yr':2011},{'count':5397, 'statei':28, 'regioni': 2, 'yr':2012},{'count':5504, 'statei':28, 'regioni': 2, 'yr':2013},{'count':5875, 'statei':28, 'regioni': 2, 'yr':2014},{'count':6234, 'statei':28, 'regioni': 2, 'yr':2015},{'count':4600, 'statei':28, 'regioni': 2, 'yr':2016}],
st29U = [{'count':12, 'statei':29, 'regioni': 5, 'yr':2001},{'count':15, 'statei':29, 'regioni': 5, 'yr':2002},{'count':12, 'statei':29, 'regioni': 5, 'yr':2003},{'count':15, 'statei':29, 'regioni': 5, 'yr':2004},{'count':23, 'statei':29, 'regioni': 5, 'yr':2005},{'count':22, 'statei':29, 'regioni': 5, 'yr':2006},{'count':23, 'statei':29, 'regioni': 5, 'yr':2007},{'count':22, 'statei':29, 'regioni': 5, 'yr':2008},{'count':33, 'statei':29, 'regioni': 5, 'yr':2009},{'count':27, 'statei':29, 'regioni': 5, 'yr':2010},{'count':17, 'statei':29, 'regioni': 5, 'yr':2011},{'count':25, 'statei':29, 'regioni': 5, 'yr':2012},{'count':40, 'statei':29, 'regioni': 5, 'yr':2013},{'count':23, 'statei':29, 'regioni': 5, 'yr':2014},{'count':23, 'statei':29, 'regioni': 5, 'yr':2015},{'count':22, 'statei':29, 'regioni': 5, 'yr':2016}],
st30U = [{'count':134, 'statei':30, 'regioni': 5, 'yr':2001},{'count':149, 'statei':30, 'regioni': 5, 'yr':2002},{'count':134, 'statei':30, 'regioni': 5, 'yr':2003},{'count':149, 'statei':30, 'regioni': 5, 'yr':2004},{'count':135, 'statei':30, 'regioni': 5, 'yr':2005},{'count':142, 'statei':30, 'regioni': 5, 'yr':2006},{'count':151, 'statei':30, 'regioni': 5, 'yr':2007},{'count':148, 'statei':30, 'regioni': 5, 'yr':2008},{'count':171, 'statei':30, 'regioni': 5, 'yr':2009},{'count':138, 'statei':30, 'regioni': 5, 'yr':2010},{'count':136, 'statei':30, 'regioni': 5, 'yr':2011},{'count':136, 'statei':30, 'regioni': 5, 'yr':2012},{'count':117, 'statei':30, 'regioni': 5, 'yr':2013},{'count':131, 'statei':30, 'regioni': 5, 'yr':2014},{'count':129, 'statei':30, 'regioni': 5, 'yr':2015},{'count':148, 'statei':30, 'regioni': 5, 'yr':2016}],
st31U = [{'count':34, 'statei':31, 'regioni': 5, 'yr':2001},{'count':54, 'statei':31, 'regioni': 5, 'yr':2002},{'count':34, 'statei':31, 'regioni': 5, 'yr':2003},{'count':54, 'statei':31, 'regioni': 5, 'yr':2004},{'count':55, 'statei':31, 'regioni': 5, 'yr':2005},{'count':45, 'statei':31, 'regioni': 5, 'yr':2006},{'count':66, 'statei':31, 'regioni': 5, 'yr':2007},{'count':65, 'statei':31, 'regioni': 5, 'yr':2008},{'count':45, 'statei':31, 'regioni': 5, 'yr':2009},{'count':62, 'statei':31, 'regioni': 5, 'yr':2010},{'count':63, 'statei':31, 'regioni': 5, 'yr':2011},{'count':53, 'statei':31, 'regioni': 5, 'yr':2012},{'count':49, 'statei':31, 'regioni': 5, 'yr':2013},{'count':59, 'statei':31, 'regioni': 5, 'yr':2014},{'count':42, 'statei':31, 'regioni': 5, 'yr':2015},{'count':65, 'statei':31, 'regioni': 5, 'yr':2016}],
st32U = [{'count':19, 'statei':32, 'regioni': 5, 'yr':2001},{'count':24, 'statei':32, 'regioni': 5, 'yr':2002},{'count':19, 'statei':32, 'regioni': 5, 'yr':2003},{'count':24, 'statei':32, 'regioni': 5, 'yr':2004},{'count':24, 'statei':32, 'regioni': 5, 'yr':2005},{'count':27, 'statei':32, 'regioni': 5, 'yr':2006},{'count':29, 'statei':32, 'regioni': 5, 'yr':2007},{'count':29, 'statei':32, 'regioni': 5, 'yr':2008},{'count':33, 'statei':32, 'regioni': 5, 'yr':2009},{'count':31, 'statei':32, 'regioni': 5, 'yr':2010},{'count':33, 'statei':32, 'regioni': 5, 'yr':2011},{'count':29, 'statei':32, 'regioni': 5, 'yr':2012},{'count':31, 'statei':32, 'regioni': 5, 'yr':2013},{'count':15, 'statei':32, 'regioni': 5, 'yr':2014},{'count':42, 'statei':32, 'regioni': 5, 'yr':2015},{'count':29, 'statei':32, 'regioni': 5, 'yr':2016}],
st33N = [{'count':1801, 'statei':33, 'regioni': 0, 'yr':2001},{'count':1907, 'statei':33, 'regioni': 0, 'yr':2002},{'count':1801, 'statei':33, 'regioni': 0, 'yr':2003},{'count':1907, 'statei':33, 'regioni': 0, 'yr':2004},{'count':1862, 'statei':33, 'regioni': 0, 'yr':2005},{'count':2169, 'statei':33, 'regioni': 0, 'yr':2006},{'count':2141, 'statei':33, 'regioni': 0, 'yr':2007},{'count':2093, 'statei':33, 'regioni': 0, 'yr':2008},{'count':2325, 'statei':33, 'regioni': 0, 'yr':2009},{'count':2153, 'statei':33, 'regioni': 0, 'yr':2010},{'count':2065, 'statei':33, 'regioni': 0, 'yr':2011},{'count':1866, 'statei':33, 'regioni': 0, 'yr':2012},{'count':1820, 'statei':33, 'regioni': 0, 'yr':2013},{'count':1671, 'statei':33, 'regioni': 0, 'yr':2014},{'count':1622, 'statei':33, 'regioni': 0, 'yr':2015},{'count':2093, 'statei':33, 'regioni': 0, 'yr':2016}],
st34U = [{'count':0, 'statei':34, 'regioni': 5, 'yr':2001},{'count':0, 'statei':34, 'regioni': 5, 'yr':2002},{'count':0, 'statei':34, 'regioni': 5, 'yr':2003},{'count':0, 'statei':34, 'regioni': 5, 'yr':2004},{'count':0, 'statei':34, 'regioni': 5, 'yr':2005},{'count':1, 'statei':34, 'regioni': 5, 'yr':2006},{'count':0, 'statei':34, 'regioni': 5, 'yr':2007},{'count':0, 'statei':34, 'regioni': 5, 'yr':2008},{'count':2, 'statei':34, 'regioni': 5, 'yr':2009},{'count':0, 'statei':34, 'regioni': 5, 'yr':2010},{'count':0, 'statei':34, 'regioni': 5, 'yr':2011},{'count':0, 'statei':34, 'regioni': 5, 'yr':2012},{'count':0, 'statei':34, 'regioni': 5, 'yr':2013},{'count':0, 'statei':34, 'regioni': 5, 'yr':2014},{'count':0, 'statei':34, 'regioni': 5, 'yr':2015},{'count':0, 'statei':34, 'regioni': 5, 'yr':2016}],
st35U = [{'count':188, 'statei':35, 'regioni': 5, 'yr':2001},{'count':180, 'statei':35, 'regioni': 5, 'yr':2002},{'count':188, 'statei':35, 'regioni': 5, 'yr':2003},{'count':180, 'statei':35, 'regioni': 5, 'yr':2004},{'count':226, 'statei':35, 'regioni': 5, 'yr':2005},{'count':217, 'statei':35, 'regioni': 5, 'yr':2006},{'count':255, 'statei':35, 'regioni': 5, 'yr':2007},{'count':212, 'statei':35, 'regioni': 5, 'yr':2008},{'count':218, 'statei':35, 'regioni': 5, 'yr':2009},{'count':239, 'statei':35, 'regioni': 5, 'yr':2010},{'count':233, 'statei':35, 'regioni': 5, 'yr':2011},{'count':193, 'statei':35, 'regioni': 5, 'yr':2012},{'count':228, 'statei':35, 'regioni': 5, 'yr':2013},{'count':151, 'statei':35, 'regioni': 5, 'yr':2014},{'count':235, 'statei':35, 'regioni': 5, 'yr':2015},{'count':212, 'statei':35, 'regioni': 5, 'yr':2016}];
///////////////////////// DATA END 
///////////////////////// DATA END 
///////////////////////// DATA END 


var logbase = Math.E;
var v4x = d3.scaleLinear().range([0, width]),
    v4x2 = d3.scaleLinear().range([0, width]),
    //x = d3.scaleTime().range([0, width]),
    //x2 = d3.scaleTime().range([0, width]),
	//x = d3.scaleScale().domain(xValues).rangeRound([0, width]).padding(0.2),
	//x2 = d3.scaleScale().domain(xValues).rangeRound([0, width]).padding(0.2),
	//y = d3.scaleLinear().range([height, 0]),
    //y2 = d3.scaleLinear().range([height2, 0]);
	v4y = d3.scaleLog().range([height, 0]).base(logbase),
    v4y2 = d3.scaleLog().range([height2, 0]).base(logbase);


/*  x x2 y y2
svg.append("rect").attr("x",0 + margin.right).attr("y",0+ margin.top)
	.attr("height", height).attr("width",width);
svg.append("rect").attr("x",0 + margin.right).attr("y",0+ margin2.top)
	.attr("height", height2).attr("width",width);
*/

var brush = d3.brushX().extent([[0, 0], [width, height2]])
    .on("brush end", brushed);

	var linea = d3.line().x(function (d,i) { return v4x(i); })
						 .y(function (d,i) { return v4y(d.count); });

	var lineb = d3.line().x(function (d,i) { return v4x2(i); })
						 .y(function (d,i) { return v4y2(d.count); });

	var clip = svg.append("defs").append("svg:clipPath")
		.attr("id", "clip").append("svg:rect").attr("width", width).attr("height", height)
		.attr("x", 0).attr("y", 0); 

	var Line_chart = svg.append("g")
		.attr("class", "focus")
		.attr("transform", "translate(" + (margin.left +20) + "," + (margin.top + 10) + ")")
		.attr("clip-path", "url(#clip)");

    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + (margin.left+20) + "," + (margin.top + 10) + ")")
		;

	var context = svg.append("g")
		.attr("x",10)
		.attr("class", "context")
		.attr("transform", "translate(" + (margin2.left+20)+ "," + margin2.top + ")")
		;
/*		
svg.append("circle").attr("cx",0).attr("cy",0).attr("r",10).attr("fill","black");
svg.append("circle").attr("cx",0+svg.attr("width")).attr("cy",0).attr("r",10).attr("fill","black");
svg.append("circle").attr("cx",0).attr("cy",0+svg.attr("height")).attr("r",10).attr("fill","black");
svg.append("circle").attr("cx",0+svg.attr("width")).attr("cy",0+svg.attr("height")).attr("r",10).attr("fill","black");
svg.append("circle").attr("cx",0).attr("cy",0).attr("r",10).attr("fill","black");
*/

/* 
var svg = d3.select(".viz4"),
    margin = {top: 20, right: 100, bottom: 110, left: 50},
    margin2 = {top: 445, right: 100, bottom: 30, left: 50},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;
	 */



///////////// yaxis START 
//y.domain([0, d3.max(st1, function (d, i) { return d; })]); y
v4y.domain([10, 30000]);
v4y2.domain(v4y.domain());	
//tickPositions = [10,30, 100,300, 1000,3000, 10000,20000];
//tickPositions = [10,100,1000,10000,20000];
tickPositions = [10,100,1000,10000];

var yAxisCall = d3.axisLeft(v4y)
	//.ticks(3)
	.tickValues(tickPositions)
	.tickSize(-width)
	.tickFormat(function(d){ return d;  });

var yAxisCall2 = d3.axisLeft(v4y)
	//.ticks(3)
	.tickValues(tickPositions)
	.tickSize(2).tickFormat("");
	
focus.append("g")
	.attr("class", "viz4yaxis") // viz4yaltaxis , viz4yaxis  y axis 
	.call(yAxisCall);

focus.append("g")
	.attr("class", "yaltaxis")
	.call(yAxisCall2);
///////////// yaxis END 

///////////// xaxis start initializatoin
var xAxis = d3.axisBottom(v4x)
	.tickSize(-height)
	.tickPadding(6)
	.tickFormat(function(d){ return d+2001;  })
	;
var xAxis2 = d3.axisBottom(v4x)
	.tickSize(5).tickPadding(6)
	.tickFormat("")
	;
var xAxis3 = d3.axisBottom(v4x2)
	.tickSize(5).tickPadding(6)
	.tickFormat(function(d){ return d+2001;  })
   // yAxis = d3.axisLeft(y)
   ;
//////////////


cirGlbRi = 2.5;
lineChartStrk = 1;
brushLineStrk = 1;
//function drawviz4Chart(){
	//console.log("drawviz4Chart - START");
	v4x.domain([0-0.5,16]);
	//v4x.domain(xValues);  x
	//v4x.domain([0-.5,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
	v4x2.domain(v4x.domain());

    focus.append("g")
        .attr("class", "viz4xaxis1")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);
	
    focus.append("g")
        .attr("class", "viz4xaxis2")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis2);

    context.append("g")
        .attr("class", "yaltaxis")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis3);
	context.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, v4x.range());
	  
	/////////////////////////////////// Drawing lines and circles STARTTTTTTTTTTTT
	//Line_chart.append("path").attr("class", "lineS").attr("d", linea(st00S)).attr("stroke", regionColors[1]).attr("stroke-width", 1).attr("fill", "none");	

mainLinest00S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st00S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line00S");
mainLinest01E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st01E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line01E");
mainLinest02E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st02E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line02E");
mainLinest03E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st03E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line03E");
mainLinest04C = Line_chart.append("path").attr("class", "lineC").attr("d", linea(st04C)).attr("stroke", regionColors[4]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line04C");
mainLinest05W = Line_chart.append("path").attr("class", "lineW").attr("d", linea(st05W)).attr("stroke", regionColors[3]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line05W");
mainLinest06W = Line_chart.append("path").attr("class", "lineW").attr("d", linea(st06W)).attr("stroke", regionColors[3]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line06W");
mainLinest07N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st07N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line07N");
mainLinest08N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st08N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line08N");
mainLinest09N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st09N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line09N");
mainLinest10E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st10E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line10E");
mainLinest11S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st11S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line11S");
mainLinest12S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st12S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line12S");
mainLinest13C = Line_chart.append("path").attr("class", "lineC").attr("d", linea(st13C)).attr("stroke", regionColors[4]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line13C");
mainLinest14W = Line_chart.append("path").attr("class", "lineW").attr("d", linea(st14W)).attr("stroke", regionColors[3]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line14W");
mainLinest15E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st15E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line15E");
mainLinest16E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st16E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line16E");
mainLinest17E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st17E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line17E");
mainLinest18E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st18E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line18E");
mainLinest19E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st19E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line19E");
mainLinest20N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st20N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line20N");
mainLinest21W = Line_chart.append("path").attr("class", "lineW").attr("d", linea(st21W)).attr("stroke", regionColors[3]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line21W");
mainLinest22E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st22E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line22E");
mainLinest23S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st23S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line23S");
//mainLinest24S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st24S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line24S");
mainLinest25E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st25E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line25E");
mainLinest26N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st26N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line26N");
mainLinest27N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st27N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line27N");
mainLinest28E = Line_chart.append("path").attr("class", "lineE").attr("d", linea(st28E)).attr("stroke", regionColors[2]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line28E");
mainLinest29U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st29U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line29U");
mainLinest30U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st30U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line30U");
mainLinest31U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st31U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line31U");
mainLinest32U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st32U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line32U");
mainLinest33N = Line_chart.append("path").attr("class", "lineN").attr("d", linea(st33N)).attr("stroke", regionColors[0]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line33N");
//mainLinest34U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st34U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line34U");
mainLinest35U = Line_chart.append("path").attr("class", "lineU").attr("d", linea(st35U)).attr("stroke", regionColors[5]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line35U");

	//Line_chart.selectAll(".lineCirclesS").data(st00S).enter().append("circle").attr("class","lineCirclesS").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return  v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); x
mainCirclest00S = Line_chart.selectAll(".lineCircles00S").data(st00S).enter().append("circle").attr("class","lineCircles00S ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest01E = Line_chart.selectAll(".lineCircles01E").data(st01E).enter().append("circle").attr("class","lineCircles01E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest02E = Line_chart.selectAll(".lineCircles02E").data(st02E).enter().append("circle").attr("class","lineCircles02E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest03E = Line_chart.selectAll(".lineCircles03E").data(st03E).enter().append("circle").attr("class","lineCircles03E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest04C = Line_chart.selectAll(".lineCircles04C").data(st04C).enter().append("circle").attr("class","lineCircles04C ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest05W = Line_chart.selectAll(".lineCircles05W").data(st05W).enter().append("circle").attr("class","lineCircles05W ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest06W = Line_chart.selectAll(".lineCircles06W").data(st06W).enter().append("circle").attr("class","lineCircles06W ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest07N = Line_chart.selectAll(".lineCircles07N").data(st07N).enter().append("circle").attr("class","lineCircles07N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest08N = Line_chart.selectAll(".lineCircles08N").data(st08N).enter().append("circle").attr("class","lineCircles08N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest09N = Line_chart.selectAll(".lineCircles09N").data(st09N).enter().append("circle").attr("class","lineCircles09N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest10E = Line_chart.selectAll(".lineCircles10E").data(st10E).enter().append("circle").attr("class","lineCircles10E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest11S = Line_chart.selectAll(".lineCircles11S").data(st11S).enter().append("circle").attr("class","lineCircles11S ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest12S = Line_chart.selectAll(".lineCircles12S").data(st12S).enter().append("circle").attr("class","lineCircles12S ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest13C = Line_chart.selectAll(".lineCircles13C").data(st13C).enter().append("circle").attr("class","lineCircles13C ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest14W = Line_chart.selectAll(".lineCircles14W").data(st14W).enter().append("circle").attr("class","lineCircles14W ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest15E = Line_chart.selectAll(".lineCircles15E").data(st15E).enter().append("circle").attr("class","lineCircles15E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest16E = Line_chart.selectAll(".lineCircles16E").data(st16E).enter().append("circle").attr("class","lineCircles16E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest17E = Line_chart.selectAll(".lineCircles17E").data(st17E).enter().append("circle").attr("class","lineCircles17E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest18E = Line_chart.selectAll(".lineCircles18E").data(st18E).enter().append("circle").attr("class","lineCircles18E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest19E = Line_chart.selectAll(".lineCircles19E").data(st19E).enter().append("circle").attr("class","lineCircles19E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest20N = Line_chart.selectAll(".lineCircles20N").data(st20N).enter().append("circle").attr("class","lineCircles20N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest21W = Line_chart.selectAll(".lineCircles21W").data(st21W).enter().append("circle").attr("class","lineCircles21W ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest22E = Line_chart.selectAll(".lineCircles22E").data(st22E).enter().append("circle").attr("class","lineCircles22E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest23S = Line_chart.selectAll(".lineCircles23S").data(st23S).enter().append("circle").attr("class","lineCircles23S ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
//mainCirclest24S = Line_chart.selectAll(".lineCircles24S").data(st24S).enter().append("circle").attr("class","lineCircles24S ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest25E = Line_chart.selectAll(".lineCircles25E").data(st25E).enter().append("circle").attr("class","lineCircles25E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest26N = Line_chart.selectAll(".lineCircles26N").data(st26N).enter().append("circle").attr("class","lineCircles26N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest27N = Line_chart.selectAll(".lineCircles27N").data(st27N).enter().append("circle").attr("class","lineCircles27N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest28E = Line_chart.selectAll(".lineCircles28E").data(st28E).enter().append("circle").attr("class","lineCircles28E ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest29U = Line_chart.selectAll(".lineCircles29U").data(st29U).enter().append("circle").attr("class","lineCircles29U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest30U = Line_chart.selectAll(".lineCircles30U").data(st30U).enter().append("circle").attr("class","lineCircles30U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest31U = Line_chart.selectAll(".lineCircles31U").data(st31U).enter().append("circle").attr("class","lineCircles31U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest32U = Line_chart.selectAll(".lineCircles32U").data(st32U).enter().append("circle").attr("class","lineCircles32U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest33N = Line_chart.selectAll(".lineCircles33N").data(st33N).enter().append("circle").attr("class","lineCircles33N ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
//mainCirclest34U = Line_chart.selectAll(".lineCircles34U").data(st34U).enter().append("circle").attr("class","lineCircles34U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 
mainCirclest35U = Line_chart.selectAll(".lineCircles35U").data(st35U).enter().append("circle").attr("class","lineCircles35U ").attr("cx",function(d,i){return v4x(i);}).attr("cy",function(d,i){return v4y(d.count);}).attr("fill",function(d,i){return regionColors[d.regioni];}).attr("r",cirGlbRi); 


    //context.append("path").attr("class", "lineS").attr("d", lineb(st00S)).attr("stroke", regionColors[1]).attr("stroke-width", 1).attr("fill", "none");
	context.append("path").attr("class", "lineS").attr("d", lineb(st00S)).attr("stroke", regionColors[1]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st01E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st02E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st03E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineC").attr("d", lineb(st04C)).attr("stroke", regionColors[4]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineW").attr("d", lineb(st05W)).attr("stroke", regionColors[3]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineW").attr("d", lineb(st06W)).attr("stroke", regionColors[3]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st07N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st08N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st09N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st10E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineS").attr("d", lineb(st11S)).attr("stroke", regionColors[1]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineS").attr("d", lineb(st12S)).attr("stroke", regionColors[1]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineC").attr("d", lineb(st13C)).attr("stroke", regionColors[4]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineW").attr("d", lineb(st14W)).attr("stroke", regionColors[3]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st15E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st16E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st17E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st18E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st19E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st20N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineW").attr("d", lineb(st21W)).attr("stroke", regionColors[3]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st22E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineS").attr("d", lineb(st23S)).attr("stroke", regionColors[1]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	//context.append("path").attr("class", "lineS").attr("d", lineb(st24S)).attr("stroke", regionColors[1]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st25E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st26N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st27N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineE").attr("d", lineb(st28E)).attr("stroke", regionColors[2]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineU").attr("d", lineb(st29U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineU").attr("d", lineb(st30U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineU").attr("d", lineb(st31U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineU").attr("d", lineb(st32U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineN").attr("d", lineb(st33N)).attr("stroke", regionColors[0]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	//context.append("path").attr("class", "lineU").attr("d", lineb(st34U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 
	context.append("path").attr("class", "lineU").attr("d", lineb(st35U)).attr("stroke", regionColors[5]).attr("stroke-width", brushLineStrk).attr("fill", "none"); 

	/////////////////////////////////// Drawing lines and circles ENDDDDDDDDDDDDDDD x

//	console.log("drawviz4Chart - END");
//}

//drawviz4Chart();
var brushStrt = 0;
var brushEnd = 570;

function zoomed() {
 console.log("inside zoomed");
}

//////////////////////// Tootip
var tooltip = d3.select("body")
				.append("div")
				.attr("class", "toolTip")
				.style("opacity", 0);

Line_chart.selectAll("circle")
	.on("mouseover", function(d,i){
			//console.log(d);
			tooltip
			  .transition()
			  .duration(200)
			  .style("opacity", .9);
			tooltip  
			  .html("<strong><span style='color:#4c4a4a'>Year:</span></strong> <span style='color:#7a3402'>" + d.yr + "</span><br>" +
	"<strong><span style='color:#4c4a4a'>State:</span></strong> <span style='color:#7a3402'>" + states[d.statei] + "</span><br>" +
	"<strong><span style='color:#4c4a4a'>Death Count: </span></strong> <span style='color:#7a3402'>" + d3.format(",")(d.count) + "</span><br>")
			  .style("left", (d3.event.pageX + 3) + "px")
              .style("top", (d3.event.pageY - 38) + "px")
              .style("display", "inline-block")
              ;  	
			d3.select(this).transition().duration(200).attr("r",cirGlbRi + 4);
		})
		.on("mouseout", function(d){
			tooltip
				.transition()
				.duration(1)
		//		.style("display", "none")
				.style("opacity", 0)
				;
			d3.select(this).transition().duration(200).attr("r",cirGlbRi);
			});


////////////////// ANNOTATIONS STARTTTTTTTTTTTT
////////////// ANNOTATIONS START   //#cecece 777777 969696 a5a4a4
viz4annot_x1 = +svg.attr("width")/2 + 33;
viz4annot_y1 = 114.5;
viz4annoto1 = svg.append("circle").attr("class", "viz4annoto1").attr("cx",viz4annot_x1)
.attr("cy",viz4annot_y1).attr("r",10)//.attr("fill", "#cecece")
.attr("fill","none").attr("stroke","#777777").attr("stroke-width",2)
;
viz4annot_x1 = viz4annot_x1+4;
viz4annot_y1 = viz4annot_y1-8;
viz4annot_x2 = viz4annot_x1 + 20;
viz4annot_y2 = viz4annot_y1 - 30;
viz4annoto2 = svg.append("line").attr("class", "viz4annoto2").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x1 = viz4annot_x2;
viz4annot_y1 = viz4annot_y2;
viz4annot_x2 = viz4annot_x1 + 40;
viz4annot_y2 = viz4annot_y2;
viz4annoto3 = svg.append("line").attr("class", "viz4annoto3").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x1 = viz4annot_x2 ;
viz4annot_y1 = viz4annot_y2 - 17;
viz4annot_x2 = viz4annot_x2;
viz4annot_y2 = viz4annot_y2 + 17;
viz4annoto4 = svg.append("line").attr("class", "viz4annoto4").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x2 = viz4annot_x2 + 3;
viz4annot_y2 = viz4annot_y1 + 2;
viz4annoto5 = svg.append("text").attr("class", "viz4annoto5")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 6).text("HIGHEST death tool seen so far in any");

viz4annoto6 = svg.append("text").attr("class", "viz4annoto6")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 18).text("state for a single year was in the year");

viz4annoto7 = svg.append("text").attr("class", "viz4annoto7")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 30).text("2011 for the state Uttar Pradesh");

/*
HIGHEST death tool seen so far in any
state for a single year was in the year
2011 for the state Uttar Pradesh

Tamil Nadu reported the 
HIGHEST count for the 
year 2016
*/

viz4annot_x1 = +svg.attr("width")/2 + 205;
viz4annot_y1 = 124;
viz4annoto11 = svg.append("circle").attr("class", "viz4annoto11").attr("cx",viz4annot_x1)
.attr("cy",viz4annot_y1)//.attr("r",4)//.attr("fill", "#cecece")
.attr("cy",viz4annot_y1).attr("r",10)//.attr("fill", "#cecece")
.attr("fill","none").attr("stroke","#777777").attr("stroke-width",2)
;

viz4annot_x1 = viz4annot_x1+6;
viz4annot_y1 = viz4annot_y1+9;
viz4annot_x2 = viz4annot_x1 + 20;
viz4annot_y2 = viz4annot_y1 + 40;
viz4annoto22 = svg.append("line").attr("class", "viz4annoto22").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x1 = viz4annot_x2;
viz4annot_y1 = viz4annot_y2;
viz4annot_x2 = viz4annot_x1 + 35;
viz4annot_y2 = viz4annot_y2;
viz4annoto33 = svg.append("line").attr("class", "viz4annoto33").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x1 = viz4annot_x2;
viz4annot_y1 = viz4annot_y2 - 17;
viz4annot_x2 = viz4annot_x2;
viz4annot_y2 = viz4annot_y2 + 17;
viz4annoto44 = svg.append("line").attr("class", "viz4annoto44").attr("stroke", "#777777")
.attr("x1", viz4annot_x1).attr("y1", viz4annot_y1).attr("stroke-width",2)
.attr("x2", viz4annot_x2).attr("y2", viz4annot_y2);

viz4annot_x2 = viz4annot_x2 + 3;
viz4annot_y2 = viz4annot_y1 + 2;
viz4annoto55 = svg.append("text").attr("class", "viz4annoto55")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 6).text("Tamil Nadu reported the ");

viz4annoto66 = svg.append("text").attr("class", "viz4annoto66")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 18).text("HIGHEST count for the ");
	
viz4annoto77 = svg.append("text").attr("class", "viz4annoto77")
	.attr("x", viz4annot_x2).style("fill", "#3f3b38").style("text-anchor", "start")
    .attr("y", viz4annot_y2 + 30).text("year 2016");

/* 
Tamil Nadu reported the 
HIGHEST count for the 
year 2016
*/

//annotations reset   
/*
d3.selectAll(".viz4annoto1").attr("r",0);
d3.selectAll(".viz4annoto2").attr("stroke-width",0);
d3.selectAll(".viz4annoto3").attr("stroke-width",0);
d3.selectAll(".viz4annoto4").attr("stroke-width",0);
d3.selectAll(".viz4annoto5").text("");
d3.selectAll(".viz4annoto6").text("");
d3.selectAll(".viz4annoto7").text("");

d3.selectAll(".viz4annoto11").attr("r",0);
d3.selectAll(".viz4annoto22").attr("stroke-width",0);
d3.selectAll(".viz4annoto33").attr("stroke-width",0);
d3.selectAll(".viz4annoto44").attr("stroke-width",0);
d3.selectAll(".viz4annoto55").text("");
d3.selectAll(".viz4annoto66").text("");
d3.selectAll(".viz4annoto77").text("");
*/


////////////// ANNOTATIONS END

////////////////// ANNOTATIONS ENDDDDDDDDDDDDDDD



////////////////////////// legends START 
var tmpOffsettW = width+100;
var tmpOffsettH = +svg.attr("height")/2 - 25;
var regGrp = ["Northern States", "Southern States", "Eastern States", 
			  "Western States",	"Central States", "Union Territories"];

function getFillClr(ii){
	//console.log(ii);
	if (regDataBool[ii] == 1) {return regionColors[ii];}
	else {return "white";} 		
}

var bi = 0;
viz4legendca0 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb0 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt0 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi])
	//.text("Union Territories")
	;	
	
bi = 1;
viz4legendca1 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb1 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt1 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi]);	

bi = 2;
viz4legendca2 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb2 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt2 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi]);	


bi = 3;
viz4legendca3 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb3 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt3 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi]);	

bi = 4;
viz4legendca4 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb4 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt4 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi]);

bi = 5;
viz4legendca5 = svg.append("circle").attr("class", "viz4legendca")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 8)
	.attr("fill", regionColors[bi])//.on("click",clickLegend(bi))
	;
viz4legendcb5 = svg.append("circle").attr("class", "viz4legendcb")
	.attr("cx", tmpOffsettW).attr("cy", tmpOffsettH+(bi*20)).attr("r", 5)
	.attr("fill", getFillClr(bi))//.on("click",clickLegend(bi))
	;
viz4legendt5 = svg.append("text").attr("class", "viz4legendt")
	.attr("x", tmpOffsettW + 12).attr("y", tmpOffsettH + 5 +(bi*20))
	.style("fill", "black").style("text-anchor", "start")
	.text(regGrp[bi]);

	
////////////////////////// legends END 



//////////////////// legend clicks START 


function hideUnhide(regi){

var brushFg;
//console.log("yyyyyyyyyyyy");
//console.log(brushStrt);

if (brushStrt == 0 && brushEnd == 570) { brushFg = 1; } else {brushFg = 0}

var annotRi1 = 10 * regDataBool[0] * brushFg;
var annotLn1 = 2 * regDataBool[0]  * brushFg;
var annotRi2 = 10 * regDataBool[1] * brushFg;
var annotLn2 = 2 * regDataBool[1] * brushFg;
/*
console.log("xxxxxxx");
console.log(brushStrt);
console.log(brushFg);
console.log(annotRi1);
console.log(annotLn1);
console.log("xxxxxxx");
console.log(brushStrt);
console.log(brushFg);
console.log(annotRi2);
console.log(annotLn2);
console.log("xxxxxxx");
*/
d3.selectAll(".viz4annoto1").transition().duration(200).attr("r", annotRi1);
d3.selectAll(".viz4annoto2").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto3").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto4").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto11").transition().duration(200).attr("r", annotRi2);
d3.selectAll(".viz4annoto22").transition().duration(200).attr("stroke-width",annotLn2);
d3.selectAll(".viz4annoto33").transition().duration(200).attr("stroke-width",annotLn2);
d3.selectAll(".viz4annoto44").transition().duration(200).attr("stroke-width",annotLn2);
	
if (annotRi1 && annotLn1 && brushFg) {
	d3.selectAll(".viz4annoto5").transition().duration(200).text("HIGHEST death tool seen so far in any");
	d3.selectAll(".viz4annoto6").transition().duration(200).text("state for a single year was in the year");
	d3.selectAll(".viz4annoto7").transition().duration(200).text("2011 for the state Uttar Pradesh");
} else {
	d3.selectAll(".viz4annoto5").transition().duration(200).text("");
	d3.selectAll(".viz4annoto6").transition().duration(200).text("");
	d3.selectAll(".viz4annoto7").transition().duration(200).text("");
}

if (annotRi2 && annotLn2 && brushFg) {
	d3.selectAll(".viz4annoto55").transition().duration(200).text("Tamil Nadu reported the ");
	d3.selectAll(".viz4annoto66").transition().duration(200).text("HIGHEST count for the ");
	d3.selectAll(".viz4annoto77").transition().duration(200).text("year 2016");	
} else {
	d3.selectAll(".viz4annoto55").transition().duration(200).text("");
	d3.selectAll(".viz4annoto66").transition().duration(200).text("");
	d3.selectAll(".viz4annoto77").transition().duration(200).text("");		
}	
/*
HIGHEST death tool seen so far in any
state for a single year was in the year
2011 for the state Uttar Pradesh

Tamil Nadu reported the 
HIGHEST count for the 
year 2016
*/	
	
	
	if(regi == 0){
		Line_chart.selectAll(".lineN").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[0]));
		context.selectAll(".lineN").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[0]));
		Line_chart.selectAll(".lineCircles07N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles08N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles09N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles20N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles26N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles27N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
		Line_chart.selectAll(".lineCircles33N").transition().duration(200).attr("r",(cirGlbRi * regDataBool[0]));
	} else if(regi == 1){
		Line_chart.selectAll(".lineS").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[1]));
		context.selectAll(".lineS").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[1]));
		Line_chart.selectAll(".lineCircles00S").transition().duration(200).attr("r",(cirGlbRi * regDataBool[1]));
		Line_chart.selectAll(".lineCircles11S").transition().duration(200).attr("r",(cirGlbRi * regDataBool[1]));
		Line_chart.selectAll(".lineCircles12S").transition().duration(200).attr("r",(cirGlbRi * regDataBool[1]));
		Line_chart.selectAll(".lineCircles23S").transition().duration(200).attr("r",(cirGlbRi * regDataBool[1]));
		Line_chart.selectAll(".lineCircles24S").transition().duration(200).attr("r",(cirGlbRi * regDataBool[1]));
	} else if(regi == 2){
		Line_chart.selectAll(".lineE").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[2]));
		context.selectAll(".lineE").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[2]));
		Line_chart.selectAll(".lineCircles01E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles02E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles03E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles10E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles15E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles16E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles17E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles18E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles19E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles22E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles25E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
		Line_chart.selectAll(".lineCircles28E").transition().duration(200).attr("r",(cirGlbRi * regDataBool[2]));
	} else if(regi == 3){
		Line_chart.selectAll(".lineW").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[3]));
		context.selectAll(".lineW").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[3]));
		Line_chart.selectAll(".lineCircles05W").transition().duration(200).attr("r",(cirGlbRi * regDataBool[3]));
		Line_chart.selectAll(".lineCircles06W").transition().duration(200).attr("r",(cirGlbRi * regDataBool[3]));
		Line_chart.selectAll(".lineCircles14W").transition().duration(200).attr("r",(cirGlbRi * regDataBool[3]));
		Line_chart.selectAll(".lineCircles21W").transition().duration(200).attr("r",(cirGlbRi * regDataBool[3]));
	} else if(regi == 4){
		Line_chart.selectAll(".lineC").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[4]));
		context.selectAll(".lineC").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[4]));
		Line_chart.selectAll(".lineCircles04C").transition().duration(200).attr("r",(cirGlbRi * regDataBool[4]));
		Line_chart.selectAll(".lineCircles13C").transition().duration(200).attr("r",(cirGlbRi * regDataBool[4]));
	} else if(regi == 5){
		Line_chart.selectAll(".lineU").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[5]));
		context.selectAll(".lineU").transition().duration(200).attr("stroke-width", (lineChartStrk * regDataBool[5]));
		Line_chart.selectAll(".lineCircles29U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
		Line_chart.selectAll(".lineCircles30U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
		Line_chart.selectAll(".lineCircles31U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
		Line_chart.selectAll(".lineCircles32U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
		Line_chart.selectAll(".lineCircles34U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
		Line_chart.selectAll(".lineCircles35U").transition().duration(200).attr("r",(cirGlbRi * regDataBool[5]));
	} 
}

hideUnhide(5);


viz4legendca0.on("click",function(){
							if (regDataBool[0] == 1) { regDataBool[0] = 0;
								viz4legendcb0.attr("fill", "white");}
							else { regDataBool[0] = 1;
								viz4legendcb0.attr("fill", regionColors[0]); }
							hideUnhide(0);
							});
viz4legendcb0.on("click",function(){
							if (regDataBool[0] == 1) { regDataBool[0] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[0] = 1;
								d3.select(this).attr("fill", regionColors[0]); }
							hideUnhide(0);
							});
viz4legendca1.on("click",function(){
							if (regDataBool[1] == 1) { regDataBool[1] = 0;
								viz4legendcb1.attr("fill", "white");}
							else { regDataBool[1] = 1;
								viz4legendcb1.attr("fill", regionColors[1]); }
							hideUnhide(1);
							});
viz4legendcb1.on("click",function(){
							if (regDataBool[1] == 1) { regDataBool[1] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[1] = 1;
								d3.select(this).attr("fill", regionColors[1]); }
							hideUnhide(1);
							});		

viz4legendca2.on("click",function(){
							if (regDataBool[2] == 1) { regDataBool[2] = 0;
								viz4legendcb2.attr("fill", "white");}
							else { regDataBool[2] = 1;
								viz4legendcb2.attr("fill", regionColors[2]); }
							hideUnhide(2); 
							});
viz4legendcb2.on("click",function(){
							if (regDataBool[2] == 1) { regDataBool[2] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[2] = 1;
								d3.select(this).attr("fill", regionColors[2]); }
							hideUnhide(2);
							});	

viz4legendca3.on("click",function(){
							if (regDataBool[3] == 1) { regDataBool[3] = 0;
								viz4legendcb3.attr("fill", "white");}
							else { regDataBool[3] = 1;
								viz4legendcb3.attr("fill", regionColors[3]); }
							hideUnhide(3);
							 });
viz4legendcb3.on("click",function(){
							if (regDataBool[3] == 1) { regDataBool[3] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[3] = 1;
								d3.select(this).attr("fill", regionColors[3]); }
							hideUnhide(3);
							 });	

viz4legendca4.on("click",function(){
							if (regDataBool[4] == 1) { regDataBool[4] = 0;
								viz4legendcb4.attr("fill", "white");}
							else { regDataBool[4] = 1;
								viz4legendcb4.attr("fill", regionColors[4]); }
							hideUnhide(4);
							 });
viz4legendcb4.on("click",function(){
							if (regDataBool[4] == 1) { regDataBool[4] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[4] = 1;
								d3.select(this).attr("fill", regionColors[4]); }
							hideUnhide(4);
							 });

viz4legendca5.on("click",function(){
							if (regDataBool[5] == 1) { regDataBool[5] = 0;
								viz4legendcb5.attr("fill", "white");}
							else { regDataBool[5] = 1;
								viz4legendcb5.attr("fill", regionColors[5]); }
							hideUnhide(5);
							 });
viz4legendcb5.on("click",function(){
							if (regDataBool[5] == 1) { regDataBool[5] = 0;
								d3.select(this).attr("fill", "white");}
							else { regDataBool[5] = 1;
								d3.select(this).attr("fill", regionColors[5]); }
							hideUnhide(5);
							 });

//////////////////// legend clicks END 

//mainLinest00S = Line_chart.append("path").attr("class", "lineS").attr("d", linea(st00S)).attr("stroke", regionColors[1]).attr("stroke-width", lineChartStrk).attr("fill", "none").attr("id","line00S"); y



//////////////////////// LABELS STARTTTTTTTTTTTT

// title
svg.append("text")     
  .attr("class", "viz1title")
  .attr("transform","translate(" + ((width+120)/2)  + " ," + (20) + ")")
  .style("text-anchor", "middle")
  .text("State-wise Number of Road Accident Deaths");
  
  // labels 
  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", y(0) - margin.left - 210)
      .attr("x",0 - ((height+240) / 2))
      .style("text-anchor", "middle")
	  .style("fill","777777")
      .text("# of Road Accident Deaths");
	
  // text label for the x axis
  svg.append("text")         
      .attr("transform",
            "translate(" + ((width+120)/2)  + " ," + 
                           (height + margin.top + 140) + ")")
      .style("text-anchor", "start")
	  .style("fill","777777")
      //.style("fill","#33302d")
      .text("Year");
	  
//////////////////////// LABELS END


function brushed() {
	//console.log("Inside Brush");
	var s = d3.event.selection || v4x2.range();
	brushStrt = s[0];
	brushEnd = s[1];
	console.log("regDataBool");
	console.log(regDataBool);
	
	
var brushFg;
if (s[0] == 0 && s[1] == 570) { brushFg = 1; } else {brushFg = 0}

	
//console.log("xxxxxxx");
//console.log(s[0]);
//console.log(brushFg);
/*
var annotRi1 = 10 * brushFg;
var annotLn1 = 2* brushFg;
var annotRi2 = 10* brushFg;
var annotLn2 = 2* brushFg;
*/

var annotRi1 = 10 * regDataBool[0] * brushFg;
var annotLn1 = 2 * regDataBool[0]  * brushFg;
var annotRi2 = 10 * regDataBool[1] * brushFg;
var annotLn2 = 2 * regDataBool[1] * brushFg;


d3.selectAll(".viz4annoto1").transition().duration(200).attr("r", annotRi1);
d3.selectAll(".viz4annoto2").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto3").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto4").transition().duration(200).attr("stroke-width",annotLn1);
d3.selectAll(".viz4annoto11").transition().duration(200).attr("r", annotRi2);
d3.selectAll(".viz4annoto22").transition().duration(200).attr("stroke-width",annotLn2);
d3.selectAll(".viz4annoto33").transition().duration(200).attr("stroke-width",annotLn2);
d3.selectAll(".viz4annoto44").transition().duration(200).attr("stroke-width",annotLn2);
	
if (annotRi1 && annotLn1 && brushFg) {
	d3.selectAll(".viz4annoto5").transition().duration(200).text("HIGHEST death tool seen so far in any");
	d3.selectAll(".viz4annoto6").transition().duration(200).text("state for a single year was in the year");
	d3.selectAll(".viz4annoto7").transition().duration(200).text("2011 for the state Uttar Pradesh");
} else {
	d3.selectAll(".viz4annoto5").transition().duration(200).text("");
	d3.selectAll(".viz4annoto6").transition().duration(200).text("");
	d3.selectAll(".viz4annoto7").transition().duration(200).text("");
}

if (annotRi2 && annotLn2 && brushFg) {
	d3.selectAll(".viz4annoto55").transition().duration(200).text("Tamil Nadu reported the ");
	d3.selectAll(".viz4annoto66").transition().duration(200).text("HIGHEST count for the ");
	d3.selectAll(".viz4annoto77").transition().duration(200).text("year 2016");	
} else {
	d3.selectAll(".viz4annoto55").transition().duration(200).text("");
	d3.selectAll(".viz4annoto66").transition().duration(200).text("");
	d3.selectAll(".viz4annoto77").transition().duration(200).text("");		
}	
	
	//console.log(s);
	//brushStrt = s[0];
	//console.log(brushStrt);
	//console.log(x2.invert(138));

	
	v4x.domain(s.map(v4x2.invert, v4x2));
	
	//Line_chart.select(".lineS").attr("d", linea(st00S));
	
	Line_chart.select("#line00S").attr("d", linea(st00S));
	Line_chart.select("#line01E").attr("d", linea(st01E));
	Line_chart.select("#line02E").attr("d", linea(st02E));
	Line_chart.select("#line03E").attr("d", linea(st03E));
	Line_chart.select("#line04C").attr("d", linea(st04C));
	Line_chart.select("#line05W").attr("d", linea(st05W));
	Line_chart.select("#line06W").attr("d", linea(st06W));
	Line_chart.select("#line07N").attr("d", linea(st07N));
	Line_chart.select("#line08N").attr("d", linea(st08N));
	Line_chart.select("#line09N").attr("d", linea(st09N));
	Line_chart.select("#line10E").attr("d", linea(st10E));
	Line_chart.select("#line11S").attr("d", linea(st11S));
	Line_chart.select("#line12S").attr("d", linea(st12S));
	Line_chart.select("#line13C").attr("d", linea(st13C));
	Line_chart.select("#line14W").attr("d", linea(st14W));
	Line_chart.select("#line15E").attr("d", linea(st15E));
	Line_chart.select("#line16E").attr("d", linea(st16E));
	Line_chart.select("#line17E").attr("d", linea(st17E));
	Line_chart.select("#line18E").attr("d", linea(st18E));
	Line_chart.select("#line19E").attr("d", linea(st19E));
	Line_chart.select("#line20N").attr("d", linea(st20N));
	Line_chart.select("#line21W").attr("d", linea(st21W));
	Line_chart.select("#line22E").attr("d", linea(st22E));
	Line_chart.select("#line23S").attr("d", linea(st23S));
	//Line_chart.select("#line24S").attr("d", linea(st24S));
	Line_chart.select("#line25E").attr("d", linea(st25E));
	Line_chart.select("#line26N").attr("d", linea(st26N));
	Line_chart.select("#line27N").attr("d", linea(st27N));
	Line_chart.select("#line28E").attr("d", linea(st28E));
	Line_chart.select("#line29U").attr("d", linea(st29U));
	Line_chart.select("#line30U").attr("d", linea(st30U));
	Line_chart.select("#line31U").attr("d", linea(st31U));
	Line_chart.select("#line32U").attr("d", linea(st32U));
	Line_chart.select("#line33N").attr("d", linea(st33N));
	//Line_chart.select("#line34U").attr("d", linea(st34U));
	Line_chart.select("#line35U").attr("d", linea(st35U));

	
	//Line_chart.selectAll(".lineCirclesS").attr("cx",function(d,i){return v4x(i);});
	//Line_chart.selectAll(".lineCircles00S").attr("cx",function(d,i){return v4x(i);}); x
	
	Line_chart.selectAll(".lineCircles00S").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles01E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles02E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles03E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles04C").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles05W").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles06W").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles07N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles08N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles09N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles10E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles11S").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles12S").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles13C").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles14W").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles15E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles16E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles17E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles18E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles19E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles20N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles21W").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles22E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles23S").attr("cx",function(d,i){return v4x(i);}); 
//Line_chart.selectAll(".lineCircles24S").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles25E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles26N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles27N").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles28E").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles29U").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles30U").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles31U").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles32U").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles33N").attr("cx",function(d,i){return v4x(i);}); 
//Line_chart.selectAll(".lineCircles34U").attr("cx",function(d,i){return v4x(i);}); 
Line_chart.selectAll(".lineCircles35U").attr("cx",function(d,i){return v4x(i);}); 

	focus.select(".viz4xaxis1").call(xAxis);
	focus.select(".viz4xaxis2").call(xAxis2);
}