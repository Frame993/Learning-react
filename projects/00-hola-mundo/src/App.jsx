import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName='nafnaf'>
                Adriana Rodrigo Alameda
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing={false} userName='madrid'>
                Yordani Alvarez Banos
            </TwitterFollowCard>
        </section>
    )
}
