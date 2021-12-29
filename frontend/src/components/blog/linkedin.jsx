import React, { Component } from 'react';

class LinkedInProfile extends Component {
    render() {
        const developerDetails = {
            "fullName": "David Koppany",
            "technology": "React",
            "level": "Junior"
        }
    
        return (
            <div class="showcase">
                <h2>{developerDetails.fullName}</h2>
                <p>{developerDetails.technology}</p>
                <p>{developerDetails.level}</p>
            </div>
        );
    }
}

export default LinkedInProfile;