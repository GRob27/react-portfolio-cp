import React, { useState, useEffect, lazy, Suspense } from "react";
import ApolloClient, { gql } from "apollo-boost";

import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const Profile = () => {
  const [prof, setrepo] = useState<any>([]);

  const renderLoader = () => <Loading />;
  const GithubProfileCard = lazy(
    () => import("../../components/githubProfileCard/GithubProfileCard")
  );

  const setProfileFunction = (array: any) => {
    setrepo(array);
  };

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const client = new ApolloClient({
        uri: "https://api.github.com/graphql",
        request: (operation) => {
          operation.setContext({
            headers: {
              authorization: `Bearer ${openSource.githubConvertedToken}`,
            },
          });
        },
      });

      client
        .query({
          query: gql`
        {
          user(login:"${openSource.githubUserName}") { 
            name
            bio
            isHireable
            avatarUrl
            location
          }
      }
        `,
        })
        .then((result) => {
          setProfileFunction(result.data.user);
        })
        .catch((error) => {
          console.log(error);
          setProfileFunction("Error");
          console.log(
            "Because of this Error Contact Section is Showed instead of Profile"
          );
          openSource.showGithubProfile = "false";
        });
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
};

export default Profile;
