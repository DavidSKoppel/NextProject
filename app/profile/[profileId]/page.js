import Link from 'next/link'

export default function Profile({ params }) {
    return (
      <div>
        <h1>ID: {params.profileId}</h1>
        <h3>
          <a href={`/profile/${params.profileId}/info/1`}>Go to Info</a>
        </h3>
      </div>
    );
  }