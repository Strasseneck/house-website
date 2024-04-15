'use client'
import Script from "next/script"

export default function Player() {
    return (
        <div className="flex items-center justify-center">
            <div id='buzzsprout-large-player' className="w-5/6 "/>
            <Script type='text/javascript' src='https://www.buzzsprout.com/2319717.js?container_id=buzzsprout-large-player&player=large' />
        </div>
    )
}