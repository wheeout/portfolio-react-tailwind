// GitHubRepoWidget.js
import React, { useState, useEffect } from "react";
import githubService from "./api/githubService";

const GitHubRepoWidget = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    githubService
      .get("/users/wheeout/repos")
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories", error);
      });
  }, []);

  return (
    <div className="p-4">
      <ul className="lg:flex flex-wrap gap-10 justify-center">
        {repos.map((repo) => (
          <li key={repo.id} className="flex-2 lg:w-5/12">
            <div className="text-center bg-gray-50 shadow-lg p-10 rounded-xl my-10 lg:h-72 dark:bg-white">
              <h3 className="text-lg font-semibold">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="text-gray-700">{repo.description}</p>
              <div className="mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={repo.owner.avatar_url}
                    alt={`${repo.owner.login}'s avatar`}
                    className="w-10 h-10 rounded-full inline-block"
                  />
                </a>
                <span className="ml-2">{repo.owner.login}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default GitHubRepoWidget;
