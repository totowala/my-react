import React from "react";
import ReactMde from "react-mde"
import 'react-mde/lib/styles/css/react-mde-all.css';
import {useState} from 'react';
import Showdown from "showdown"

// export default function Editor ({currentNote, updateNote}){
export default function Editor ({tempNoteText, setTempNoteText}){
        const [selectedTab, setSelectedTab] = useState ("write")
    const converter = new Showdown.Converter({
        tables:true,
        simplifiedAutoLink:true,
        strikethrough:true,
        tasklists:true,
    })
    const paragraphStyle = {
        color: 'blue',
        fontSize: '8px',
        textAlign: 'left',
      };

    return (
        <section className="pane editor">
            <ReactMde
            value={tempNoteText}
            // value={currentNote? currentNote.body:""}
            onChange={setTempNoteText}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown)=>
            Promise.resolve(converter.makeHtml(markdown))
        }
        midEditorHeight={80}
        heighUnits="vh"
        />
        {/* <p style={paragraphStyle}>Last updated: {currentNote? currentNote.updatedAt:""}</p> */}
        </section>
    )
}