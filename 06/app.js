console.log('app');

var appkey = '5e306eca1d4dd7e798167f5c11a8276c';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;

var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK 5e306eca1d4dd7e798167f5c11a8276c');
var options = {
    headers: myHeaders
};

fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })
