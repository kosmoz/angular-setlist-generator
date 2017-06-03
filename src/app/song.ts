export class Song {
    public title: string;
    public duration: number;
    public hasPause: boolean;
    public isEnabled = true;
    private durationString: string;

    public get durationAsString(): string {
        return this.durationString;
    }

    public set durationAsString(value: string) {
        const regexp = /(\d+)\s*([dhms])/g;
        let m: RegExpExecArray;
        let result = 0;

        while ((m = regexp.exec(value)) !== null) {
            regexp.lastIndex++;
            switch (m[2]) {
                case 'd':
                    result += parseInt(m[1], 10) * 86400
                    break;
                case 'h':
                    result += parseInt(m[1], 10) * 3600
                    break;
                case 'm':
                    result += parseInt(m[1], 10) * 60
                    break;
                case 's':
                    result += parseInt(m[1], 10)
                    break;
            }
        }
        
        this.durationString = value;
        this.duration = result;
    }
}
