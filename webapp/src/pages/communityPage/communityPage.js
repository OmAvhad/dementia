import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import CommunityInput from "../../components/communityInput/communityInput";
import CommunityPost from "../../components/coummunityPost/communityPost";

function CommunityPage() {
    return (
        <>
            <PageHeader title={"Community"}/>
            <CommunityInput/>
            <CommunityPost/>
        </>
    );
}

export default CommunityPage;