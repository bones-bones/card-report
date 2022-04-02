import styled from '@emotion/styled';

import React, { useState } from 'react';

interface Props {
    channel: RTCDataChannel;
    connection: RTCPeerConnection;
}

export const PlayerView = (props: Props) => {
    const [playerData, setPlayerData] = useState<Record<string, any>>();

    props.channel.onmessage = ({ data }) => {
        setPlayerData(data);
    };

    return <>{JSON.stringify(playerData, null, '\t')}</>;
};
