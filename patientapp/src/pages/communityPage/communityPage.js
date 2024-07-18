import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import CommunityInput from "../../components/communityInput/communityInput";
import CommunityPost from "../../components/coummunityPost/communityPost";
import BottomNav from "../../components/bottomNav/bottomNav";

function CommunityPage() {
    return (
        <>
            <PageHeader title={"Community"}/>
            <CommunityInput/>
            <CommunityPost/>
            <BottomNav/>
        </>
    );
}

export default CommunityPage;