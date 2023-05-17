import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Body.css'
import PaginationButtons from './PaginationButtons' 
const PaginationData = () => {

  let [apiData, setApiData] = useState([]);
  let [isLoading, setLoading] = useState(true);
  let [currentPage,setCurrentPage]=useState(0) 
  let listPerPage=8;
  let totalList=apiData.length;
  let firstList=currentPage*listPerPage;
  let lastList=firstList+listPerPage;
  let dataToShow=apiData.slice(firstList,lastList);


  useEffect(() => {
    const getApiData = async () => {
      let res = await axios.get(`https://api.github.com/repos/facebook/react/issues`)
      try {
        // let res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`)
        setApiData(res.data)
        setLoading(false);
      }
      catch (error) {
        console.log(error)
      }
    }
    getApiData();
  }, [])
  return (
    <div>
      {isLoading ? <h1>It is loading</h1> : dataToShow.map((issueElem) => {
        let { title, number, user, labels, updated_at,html_url } = issueElem;
        
        let userName = user["login"];
        let label=false;

        //label data
        let labelObj = labels[0];
        if (labelObj !== undefined) {
          label=true;
          var labelName = labels[0]["name"]
          var labelColor = labels[0]["color"]
          var labelDesc = labels[0]["description"]
          console.log("label name ",labelName)
        }
        
        let updatedTime=getOpenedTime(updated_at)
        console.log("update time ",updatedTime);
        
        // console.log(title,number,userName) 
        function getOpenedTime(dateStr) { 
          let lastUpdatedDate = new Date(dateStr).getTime();

          let dt = new Date();//contais current date
          let extracedTime = dt.toString().slice(16, 24);// stores time in 24 hour format in Gmt timezone

          let currentDate = dt.toISOString().slice(0, 11) + extracedTime + "Z"; //to make to GMT time zone
          currentDate = new Date(currentDate).getTime(); 

          let timeDiffernceMinute = Math.floor((currentDate - lastUpdatedDate) / (1000 * 60));
          let updateTimeStr = "";
          let minute = 1;
          let hour = minute * 60;
          let day = hour * 24; 
          let month = day * 30;
          let year=365*hour;
          if (timeDiffernceMinute >= 1 && timeDiffernceMinute < hour) {
            updateTimeStr = timeDiffernceMinute + " minutes "
          }
          else if (timeDiffernceMinute >= hour && timeDiffernceMinute < day) {
            updateTimeStr = Math.floor(timeDiffernceMinute/hour) + " hours "
          }
          else if (timeDiffernceMinute >= day && timeDiffernceMinute < month) {
            updateTimeStr = Math.floor(timeDiffernceMinute/day) + " days "
          } 
          else if (timeDiffernceMinute >= month && timeDiffernceMinute < year) {
            updateTimeStr = Math.floor(timeDiffernceMinute/month) + " months "
          }



          return updateTimeStr;
        }
        
        //variables to manage pagination
          return(
            <> 
              <li className="list-group-item list-group-item-dark inner-border" key={number}>
              <svg viewBox="0 0 16 16" width="16px" height="16px" style={{ color:"#3fb950"}} >
                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                        </svg>
                            {/* <Link><span className='white-color'>{title}</span></Link> */}
                            <span className='white-color '><a href={html_url} className='title-link'>{title}</a></span>
                            {label?<button type="button" className="btn btn-secondary btn-s rounded-pill list-btn" data-bs-toggle="tooltip" data-bs-placement="bottom" title={labelDesc}>{labelName}</button>:""}<br/>
                            
                            <span className='faded-color'>#{number} opened on {updatedTime} by {userName}</span>
              </li>
            </>
          )
        }
        
        )} 
      {isLoading===false?<PaginationButtons totalList={totalList} listPerPage={listPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>:""}
    </div>
  )
}

export default PaginationData
