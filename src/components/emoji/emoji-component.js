import React from "react";
import "emoji-mart/css/emoji-mart.css";

import { Emoji } from "emoji-mart";

const EmojiComponent = () => {
    // const smile = String.fromCodePoint(0x1f4ac);
    return (
        <div>
            {/* <p>😀</p>

            <p>{smile}</p> */}
            <Emoji emoji={{ id: "rat" }} size={64} />
            <Emoji emoji={{ id: "rat" }} size={256} />
            <Emoji emoji=":rat:" set="google" size={64} />
            <Emoji emoji="rat" set="google" size={256} native={true} />

            {/* <Picker set="apple" />
            <Picker onSelect={addEmoji} />
            <Picker title="Pick your emoji…" emoji="point_up" />
            <Picker
                style={{ position: "absolute", bottom: "20px", right: "20px" }}
            /> */}
        </div>
    );
};

export default EmojiComponent;
