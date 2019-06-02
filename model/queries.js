const { request } = require('graphql-request')

// document.write('<script type="text/javascript" src = "https://apis.google.com/js/platform.js"></script>');

// var profile ,fname,lname,email ; 
//     function init() {
//         gapi.load('auth2',function(){

// var GoogleUser = GoogleAuth.currentUser.get();
// // if(GoogleUser.isSignedIn())
// // {
// profile = GoogleUser.getBasicProfile();
  
//    fname =   profile.getGivenName();

//    lname =   profile.getFamilyName();
//   // var lname =   $("#email").text(profile.getFamilyName);
//   email =   profile.getEmail();

// console.log(fname);

//         });
//     }

var queries ;
async function main() {



  const endpoint = 'https://highnot.herokuapp.com/v1/graphql'


 queries = /* GraphQL */ `
    mutation upsertInfo(
  $ch4: float8!,
    $co2: float8!,
  $n2o: float8!
){
  insert_account_info(
    objects: {
      ch4: $ch4,
      co2: $co2,
      fname: fname,
email : email ,
      lname: lname,
      n2o: $n2o
    },
    on_conflict: {
      constraint: account_info_pkey,
      update_columns: [ch4, co2, n2o]
    }) {
    returning {
      ch4
      co2
      fname
      email
      lname
      n2o
    }
  }
}
  `

  const variables = {
    ch4: 32.90,
    co2: 11.23,
    n2o: 12.1
  }

  const data = await request(endpoint, queries, variables)
  console.log(JSON.stringify(data, undefined, 2))
}

main().catch(error => console.error(error))
module.exports=queries ; 