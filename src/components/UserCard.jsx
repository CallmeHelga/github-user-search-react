import React from "react";
import "./UserCard.css";
import iconLocation from '../assets/icon-location.svg';
import iconWebsite from '../assets/icon-website.svg'
import iconTwitter from '../assets/icon-twitter.svg'
import iconCompany from '../assets/icon-company.svg'
import { formatDate } from 'date-mini-format'

export default function UserCard({ userData }) {


    // const formattedDate = new Date(userData.created_at).toLocaleDateString('en-GB', {
    //     day: '2-digit',
    //     month: 'short',
    //     year: 'numeric'
    // })

    const formattedDate = formatDate(userData.created_at)


    return (
        <div className="user-card">
            <img className="avatar"
                src={userData.avatar_url}
                alt="User avatar"
            />
            <div className="user-card-content">
                {/* avatar/ login/ date */}
                <div className="user-card-header">
                    <div className="user-info-top">
                        <h2>{userData.name}</h2>
                        <p className="login">@{userData.login}</p>
                    </div>
                    <p className="date">Joined {formattedDate}</p>
                </div>
                {/* bio */}
                <div className="main-info-wrapper">
                    <p className="bio">
                        {userData.bio ? userData.bio : "This profile has no bio"}
                    </p>

                    {/* statistics */}
                    <div className="stats">
                        <div className="stat">
                            <p>Repos</p>
                            <p>{userData.public_repos}</p>
                        </div>
                        <div className="stat">
                            <p>Followers</p>
                            <p>{userData.followers}</p>
                        </div>
                        <div className="stat">
                            <p>Following</p>
                            <p>{userData.following}</p>
                        </div>
                    </div>

                    {/* bottom-info */}
                    <div className="bottom-info">
                        <div className="info-column">
                            <div className="info-item">
                                <p>
                                    <img src={iconLocation} alt="Location icon" />
                                    {userData.location || "Not available"}</p>
                            </div>
                            <div className="info-item">
                                <p>
                                    <img src={iconWebsite} alt="Website icon" />
                                    {userData.blog ? (
                                        <a
                                            href={userData.blog}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {userData.blog}
                                        </a>
                                    ) : (
                                        "Not available"
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="info-column">
                            <div className="info-item">
                                <p>
                                    <img src={iconTwitter} alt="Twitter icon" />
                                    {userData.twitter_username ? `@${userData.twitter_username}` : "Not available"}</p>
                            </div>
                            <div className="info-item">
                                <p>
                                    <img src={iconCompany} alt="Company icon" />
                                    {userData.company || "Not available"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
