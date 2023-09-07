function newJob(arr) {
    return {
        start: arr[0],
        end: arr[1],
        load: arr[2],
    }
}

export const solution = (jobValues: number[][]) => {
    const isInvalid = jobValues.some((job) => job.length !== 3)
    if (isInvalid) {
        return -1
    }

    const jobs = jobValues.map(newJob)

    const timelineSize = Math.max(...jobValues.map((job) => job[1]))

    const cpuTimeline = Array(timelineSize).fill(0)

    for (const job of jobs) {
        for (let i = job.start; i < job.end; i++) {
            cpuTimeline[i] += job.load
        }
    }

    return cpuTimeline.reduce((currentMax, next) => {
        return Math.max(currentMax, next)
    }, 0)
}
