export interface TrackersTimeFrame {
	current: number;
	previous: number;
}

export interface Trackers {
	title: string;
	color: string;
	image: string;
	timeframes: {
		daily: TrackersTimeFrame;
		weekly: TrackersTimeFrame;
		monthly: TrackersTimeFrame;
	};
}

export type TimeKey = 'daily' | 'weekly' | 'monthly';
