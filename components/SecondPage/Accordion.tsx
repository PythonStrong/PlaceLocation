import React from 'react'

export default function Accordion({ title, text }: any) {
    return (
        <div>
            <div className="collapse collapse-arrow join-item border border-base-300 opacity">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium text-yellow-400">
                    {title}
                </div>
                <div className="collapse-content">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
