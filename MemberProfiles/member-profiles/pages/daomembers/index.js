import ProfileList from '../../components/ProfileList.jsx'
import MainNavigation from '../../components/layout/MainNavigation.jsx';

function DAOmembers(props){
    return(
        <div>
            <MainNavigation />
            <ProfileList profiles={props.memberProfiles}/>
        </div>
    );
}

export default DAOmembers;

//This is server-side code
export async function getStaticProps(context) {
  // let response = await fetch("https://api.clickup.com/api/v2/view/13pgd4-7347/task?page=0", {

  const token = "pk_32233017_2SG6K8H5Z7MWLRG3UNS3CQRFHUHCM56W"; //100req/min API access token

  let response = await fetch("https://api.clickup.com/api/v2/list/146225010/task?page=0", {
      "muteHttpExceptions": true,
      "headers": {
          "Authorization": token,
        }
    }
  )
  let json = await response.json();
  console.log(json);

 // console.log(response.getContentText());
  // let json = JSON.parse(response.getContentText());


    // const { Clickup } = require("clickup.js");
    
    // const clickup = new Clickup(token);
    var memberProfs = [];
  
    // try {
    //   //profile list id = 146225010
    //   //member list id = 13pgd4-7347
    //   //advocate list id = 13pgd4-7367
  
    //   //get member profiles
    //   // var data = await clickup.lists.getTasks("146225010");
    //   // var data = await clickup.views.get("13pgd4-7347");
    //   var data = await clickup.views.getTasks("13pgd4-7347", 0);
    //   // var data = await clickup.views.getTasks("146225010");//getViews("146225010");
    //   console.log(data.body);

    //   memberProfs = data.body.tasks;
      
    // } catch (error) {
    //     console.log("Error::", error.message);
    // }

    return {
      props: {
        memberProfiles: memberProfs,
      },
  
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 60 seconds
      revalidate: 1, // In seconds
    };
  
}