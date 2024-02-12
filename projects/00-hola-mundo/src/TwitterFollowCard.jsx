import { Children } from 'react'
import './App.css'

export function TwitterFollowCard({userName = 'unknown', children, isFollowing }) {
    
    const text = isFollowing? 'siguiendo' : 'seguir'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/twitter/${userName}`} alt="avatar" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}