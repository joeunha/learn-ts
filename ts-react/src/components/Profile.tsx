import * as React from 'react';

interface IProps {
    name: string;
    job: string;
}

class Profile extends React.Component<IProps> {
    public render() {
        const { name, job } = this.props;
        return (
            <div>
                <h1>프로필</h1>
                <div className="name">
                    <b>이름: </b>{name}
                </div>
                <div className="job">
                    <b>직업: </b>{job}
                </div>
            </div>
        )
    }
}

export default Profile;
