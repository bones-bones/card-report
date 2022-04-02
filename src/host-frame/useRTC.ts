import { useState } from 'react';
import { createGuest } from '../rtc';

export const useRTCHost = () => {
    //

    return {};
};

export const useRTCGuest = (offerDesc?: RTCSessionDescriptionInit) => {
    const [dataChannel, setDataChannel] = useState<RTCDataChannel>();

    if (!dataChannel && offerDesc) {
        createGuest(offerDesc).then((connection) => {
            const existingOnDataChannel = connection.ondatachannel;
            connection.ondatachannel = (channelEvent) => {
                setDataChannel(channelEvent.channel);
                existingOnDataChannel?.apply(connection, [channelEvent]);
            };
        });
    }

    return { dataChannel };
};
