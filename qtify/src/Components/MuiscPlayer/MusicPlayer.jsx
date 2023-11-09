import React, { useState, useRef, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import './MusicPlayer.css';

const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    width: '100vw',
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
}));

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const MusicPlayer = () => {
    const theme = useTheme();
    const duration = 208; // seconds
    const [position, setPosition] = useState(0);
    const [paused, setPaused] = useState(true); // Start in a paused state

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', () => {
                setPosition(audioRef.current.currentTime);
            });

            audioRef.current.addEventListener('canplaythrough', () => {
                // Check if the audio is loaded before playing
                if (!paused) {
                    audioRef.current.play();
                }
            });
        }

        return () => {
            // Cleanup event listeners when the component unmounts
            if (audioRef.current) {
                audioRef.current.removeEventListener('timeupdate', () => {
                    setPosition(audioRef.current.currentTime);
                });

                audioRef.current.removeEventListener('canplaythrough', () => {
                    if (!paused) {
                        audioRef.current.play();
                    }
                });
            }
        };
    }, [paused]);

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = Math.floor(value - minute * 60);
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    const playPauseSong = () => {
        if (audioRef.current) {
            if (paused) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setPaused(!paused);
        }
    };

    return (
        <Box sx={{ width: '100vw', overflow: 'hidden', border: 'solid green' }}>
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        className="musicimage"
                        alt="can't win - Chilling Sunday"
                        src="https://pagalworld.cool/siteuploads/thumb/sft1/438_resize2x_250x250.webp"
                    />
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>
                        <Typography noWrap>
                            <b>Attention! (Charlie Puth)</b>
                        </Typography>
                        <Typography variant="caption" color="white" fontWeight={500}>
                            Charlie Puth
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={playPauseSong}
                    >
                        {paused ? (
                            <PlayArrowRounded sx={{ fontSize: '3rem', color: 'white' }} htmlColor={mainIconColor} />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3rem', color: 'white' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                </Box>
                <Slider
                    className='slide'
                    size="small"
                    value={position}
                    min={0}
                    step={0.1}
                    max={duration}
                    onChange={(_, value) => {
                        setPosition(value);
                        audioRef.current.currentTime = value;
                    }}
                    sx={{
                        height: 4,
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                        padding: '0 16px',
                    }}
                >
                    <TinyText className='songtime'>{formatDuration(position)}</TinyText>
                    <TinyText className='songtime'>{formatDuration(duration)}</TinyText>
                </Box>
            </Widget>
            <audio
                ref={audioRef}
                src="https://files.gospeljingle.com/uploads/music/2023/05/Charlie-Puth-Attention-(Gospeljingle.com).mp3"
            />
        </Box>
    );
};

export default MusicPlayer;
