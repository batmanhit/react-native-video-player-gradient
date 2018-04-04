
import {StyleSheet} from 'react-native';
/**
 * This object houses our styles. There's player
 * specific styles and control specific ones.
 * And then there's volume/seeker styles.
 */
export default styles = {
    player: StyleSheet.create({
        container: {
            backgroundColor: '#000',
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'space-between',
        },
        video: {
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    }),
    error: StyleSheet.create({
        container: {
            backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
        },
        icon: {
            marginBottom: 16,
        },
        text: {
            backgroundColor: 'transparent',
            color: '#f27474'
        },
    }),
    loader: StyleSheet.create({
        container: {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
    controls: StyleSheet.create({
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: 'transparent', 
            backgroundColor: 'transparent', 
            height: null,
            width: null,
        },
        column: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: null,
            width: null,
        },
        vignette: {
            // backgroundColor: 'rgba(0, 0, 0, 0.65)'
            // resizeMode: 'stretch'
        },

        control: {
            padding: 16,
        },
        text: {
            backgroundColor: 'transparent',
            color: '#FFF',
            fontSize: 14,
            textAlign: 'center',
        },
        leftSide: {
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'flex-start', 
            alignItems: 'center'
        }, 
        rightSide: {
            flex: 1, 
            flexDirection: 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center', 
        },
        pullRight: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        top: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'flex-start',
        },
        bottom: {
            alignItems: 'stretch',
            flex: 2,
            justifyContent: 'flex-end',
        },
        topControlGroup: {
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: null,
            margin: 12,
            marginVertical: 0, 
            backgroundColor: 'transparent'
        },
        bottomControlGroup: {
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 12,
            paddingRight: 12,
            marginBottom: 0,
        },
        blurView: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
        volume: {
            flexDirection: 'row',
        },
        fullscreen: {
            flexDirection: 'row',
        },
        controlButton: {
            position: 'relative',
            justifyContent: 'center', 
            alignItems: 'center', 
            // width: 60,
            backgroundColor: 'transparent', 
            zIndex: 0
        },
        title: {
            alignItems: 'center',
            flex: 0.6,
            flexDirection: 'column',
            padding: 0,
        },
        titleText: {
            textAlign: 'center',
        },
        timer: {
            // width: 100,
        },
        currentTime: {
            backgroundColor: 'transparent',
            color: '#FFF',
            fontSize: 18,
            textAlign: 'left',
        },
        duration: {
            
        }
    }),
    volume: StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 16,
            borderRadius: 2, 
            marginLeft: 20,
            marginRight: 20,
        },
        track: {
            backgroundColor: '#333',
            height: 4,
            borderRadius: 2, 
            marginLeft: 7,
        },
        fill: {
            // backgroundColor: '#FFF',
            height: 4,
            borderRadius: 2, 
        },
        handle: {
            position: 'absolute',
            marginTop: -24,
            marginLeft: -24,
            padding: 16,
        }, 
        circle: {
            borderRadius: 12,
            position: 'relative',
            height: 16,
            width: 16,
        }
    }),
    seekbar: StyleSheet.create({
        container: {
            alignSelf: 'stretch',
            height: 6,
            backgroundColor: 'rgba(0, 0, 0, 0.33)', 
            // overflow: ''
        },
        track: {
            backgroundColor: '#333',
            height: 6,
            position: 'relative',
            // top: 14,
            width: '100%', 
        },
        fill: {
            backgroundColor: '#FFF',
            height: 6,
            width: '100%'
        },
        handle: {
            position: 'absolute',
            marginLeft: -14,
            marginTop: -14, 
            height: 28,
            width: 28,
        },
    })
};