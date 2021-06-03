import React, { useEffect } from 'react';
import { getTweetData } from '../../services/apiService';
import { useQuery } from '@apollo/client';
import { getPostData } from '../../utils/SocialMediaData';
import { APOLLO_POLL_INTERVAL_MS } from '../../constants/Blockchain';
import { campaignQuery } from '../../apollo/campaign.gql';
const OngoingCampaign = () => {
  // let listingVariables = {
  //   first: 1,
  //   where: { id: TOKEN_STATUS.LISTED },
  // };
  // const campaignQueryRes = useQuery(campaignQuery, {
  //   pollInterval: APOLLO_POLL_INTERVAL_MS,
  //   variables: listingsVariables,
  // });

  // const handleNewPostUrl = () => getPostData(postUrl);

  // const getData = async () => {
  //   const data = await axios.get(`http://localhost:4000/dev/getTweet/1383842980973277186`, {
  //     tweetId: 1383842980973277186,
  //   });
  //   console.log(data);
  // };
  const getApiService = () => {
    // const apiService = new ApiService();
    getTweetData();
  };
  return (
    <div>
      {/* <button onClick={getData}>get twitter data</button> */}
      <button onClick={getApiService}>get axios</button>
    </div>
  );
};

export default OngoingCampaign;
