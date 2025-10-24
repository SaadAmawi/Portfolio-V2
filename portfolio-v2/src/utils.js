const splitLogoArrayBy3 = (logos, index) => {
    const third = Math.floor(logos.length / 3);
    
    const sections = {
        start: [0, third],
        middle: [third, third * 2],
        end: [third * 2, logos.length]
    };
    
    const [start, end] = sections[index] || sections.start;
    return logos.slice(start, end);
};

export default splitLogoArrayBy3