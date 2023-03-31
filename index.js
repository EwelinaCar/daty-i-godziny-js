function GetDateTime(){
		const date = new Date();
   
   	let hour = Format(date.getHours()); 
    let minutes = Format(date.getMinutes());
    let year = date.getFullYear();
    let month = Format(date.getMonth()+1);
    let day = Format(date.getDate());
    
   	return `Data i godzina: ${hour}:${minutes}-${day}.${month}.${year}`;
  }
  
  function Format(value){
    if(value<10){
      return `0${value}`;
    }
    return value;
  }
  
  console.log(GetDateTime());
  
  function Birth(year){
   const birthday = year - new Date().getFullYear();
    return Math.abs(birthday);
  }
  
  console.log(Birth(2001));
