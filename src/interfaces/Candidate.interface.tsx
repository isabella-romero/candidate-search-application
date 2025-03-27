// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string | null;
    bio?: string;
    public_repos?: number;
    followers?: number;
    following?: number;
    twitter_username?: string | null; // Add this
    hireable?: boolean | null; // Add this
}
