import { ActivityType } from 'src/enums/ActivityTypes';
export declare enum PlannedWorkoutStepDurationType {
    TIME = 0,
    POWERGREATERTHAN = 1,
    POWERLESSTHAN = 2,
    FIXEDREST = 3,
    CALORIES = 4,
    HRGREATERTHAN = 5,
    REPS = 6,
    HRLESSTHAN = 7,
    DISTANCEMETERS = 8,
    STEPS = 9
}
export declare enum PlannedWorkoutStepTargetType {
    CADENCE = 0,
    HEARTRATE = 1,
    POWER = 2,
    SPEED = 3,
    PACE = 4,
    TSS = 5,
    IF = 6,
    REPETITION = 7,
    SWIMSTROKE = 8
}
export interface Jsonable<T = any> {
    toJson(): T;
}
export interface PlannedWorkoutSteps extends Jsonable {
}
export interface PlannedWorkoutStepDuration extends Jsonable {
    duration_type: number;
}
export interface PlannedWorkoutStepTarget extends Jsonable {
    target_type: number;
}
export declare class TimePlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    seconds?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        seconds?: number | null;
    } | {
        duration_type: number;
        seconds?: number | null;
    });
    static fromJson(json: any): TimePlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        seconds: number | null;
    };
}
export declare class PowerAbovePlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    power_above_watts?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        powerAboveWatts?: number | null;
    } | {
        duration_type: number;
        power_above_watts?: number | null;
    });
    static fromJson(json: any): PowerAbovePlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        power_above_watts: number | null;
    };
}
export declare class PowerBelowPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    power_below_watts?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        powerBelowWatts?: number | null;
    } | {
        duration_type: number;
        power_below_watts?: number | null;
    });
    static fromJson(json: any): PowerBelowPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        power_below_watts: number | null;
    };
}
export declare class FixedRestPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    rest_seconds?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        restSeconds?: number | null;
    } | {
        duration_type: number;
        rest_seconds?: number | null;
    });
    static fromJson(json: any): FixedRestPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        rest_seconds: number | null;
    };
}
export declare class CaloriesPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    calories?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        calories?: number | null;
    } | {
        duration_type: number;
        calories?: number | null;
    });
    static fromJson(json: any): CaloriesPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        calories: number | null;
    };
}
export declare class HRAbovePlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    hr_above_bpm?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        hrAboveBpm?: number | null;
    } | {
        duration_type: number;
        hr_above_bpm?: number | null;
    });
    static fromJson(json: any): HRAbovePlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        hr_above_bpm: number | null;
    };
}
export declare class HRBelowPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    hr_below_bpm?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        hrBelowBpm?: number | null;
    } | {
        duration_type: number;
        hr_below_bpm?: number | null;
    });
    static fromJson(json: any): HRBelowPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        hr_below_bpm: number | null;
    };
}
export declare class DistancePlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    distance_meters?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        distanceMeters?: number | null;
    } | {
        duration_type: number;
        distance_meters?: number | null;
    });
    static fromJson(json: any): DistancePlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        distance_meters: number | null;
    };
}
export declare class StepsPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    steps?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        steps?: number | null;
    } | {
        duration_type: number;
        steps?: number | null;
    });
    static fromJson(json: any): StepsPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        steps: number | null;
    };
}
export declare class RepsPlannedWorkoutStepDuration implements PlannedWorkoutStepDuration {
    duration_type: number;
    reps?: number | null;
    constructor(args: {
        durationType?: PlannedWorkoutStepDurationType;
        reps?: number | null;
    } | {
        duration_type: number;
        reps?: number | null;
    });
    static fromJson(json: any): RepsPlannedWorkoutStepDuration;
    toJson(): {
        duration_type: number;
        reps: number | null;
    };
}
export type PlannedWorkoutStepDurationUnion = TimePlannedWorkoutStepDuration | PowerAbovePlannedWorkoutStepDuration | PowerBelowPlannedWorkoutStepDuration | FixedRestPlannedWorkoutStepDuration | CaloriesPlannedWorkoutStepDuration | HRAbovePlannedWorkoutStepDuration | HRBelowPlannedWorkoutStepDuration | DistancePlannedWorkoutStepDuration | StepsPlannedWorkoutStepDuration | RepsPlannedWorkoutStepDuration;
export declare function parseDuration(json: any): PlannedWorkoutStepDurationUnion;
export declare class CadencePlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    cadence_high?: number | null;
    cadence_low?: number | null;
    cadence?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        cadenceHigh?: number | null;
        cadenceLow?: number | null;
        cadence?: number | null;
    } | {
        target_type: number;
        cadence_high?: number | null;
        cadence_low?: number | null;
        cadence?: number | null;
    });
    static fromJson(json: any): CadencePlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        cadence_high: number | null;
        cadence_low: number | null;
        cadence: number | null;
    };
}
export declare class HRPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    hr_bpm_high?: number | null;
    hr_bpm_low?: number | null;
    hr_percentage?: number | null;
    hr_percentage_low?: number | null;
    hr_percentage_high?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        hrBpmHigh?: number | null;
        hrBpmLow?: number | null;
        hrPercentage?: number | null;
        hrPercentageLow?: number | null;
        hrPercentageHigh?: number | null;
    } | {
        target_type: number;
        hr_bpm_high?: number | null;
        hr_bpm_low?: number | null;
        hr_percentage?: number | null;
        hr_percentage_low?: number | null;
        hr_percentage_high?: number | null;
    });
    static fromJson(json: any): HRPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        hr_bpm_high: number | null;
        hr_bpm_low: number | null;
        hr_percentage: number | null;
        hr_percentage_low: number | null;
        hr_percentage_high: number | null;
    };
}
export declare class PowerPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    power_watt_high?: number | null;
    power_watt_low?: number | null;
    power_watt?: number | null;
    power_percentage?: number | null;
    power_percentage_low?: number | null;
    power_percentage_high?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        powerWattHigh?: number | null;
        powerWattLow?: number | null;
        powerWatt?: number | null;
        powerPercentage?: number | null;
        powerPercentageLow?: number | null;
        powerPercentageHigh?: number | null;
    } | {
        target_type: number;
        power_watt_high?: number | null;
        power_watt_low?: number | null;
        power_watt?: number | null;
        power_percentage?: number | null;
        power_percentage_low?: number | null;
        power_percentage_high?: number | null;
    });
    static fromJson(json: any): PowerPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        power_watt_high: number | null;
        power_watt_low: number | null;
        power_watt: number | null;
        power_percentage: number | null;
        power_percentage_low: number | null;
        power_percentage_high: number | null;
    };
}
export declare class SpeedPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    speed_meters_per_second?: number | null;
    speed_percentage?: number | null;
    speed_percentage_low?: number | null;
    speed_percentage_high?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        speedMetersPerSecond?: number | null;
        speedPercentage?: number | null;
        speedPercentageLow?: number | null;
        speedPercentageHigh?: number | null;
    } | {
        target_type: number;
        speed_meters_per_second?: number | null;
        speed_percentage?: number | null;
        speed_percentage_low?: number | null;
        speed_percentage_high?: number | null;
    });
    static fromJson(json: any): SpeedPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        speed_meters_per_second: number | null;
        speed_percentage: number | null;
        speed_percentage_low: number | null;
        speed_percentage_high: number | null;
    };
}
export declare class PacePlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    pace_minutes_per_kilometer?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        paceMinutesPerKilometer?: number | null;
    } | {
        target_type: number;
        pace_minutes_per_kilometer?: number | null;
    });
    static fromJson(json: any): PacePlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        pace_minutes_per_kilometer: number | null;
    };
}
export declare class TSSPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    tss?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        tss?: number | null;
    } | {
        target_type: number;
        tss?: number | null;
    });
    static fromJson(json: any): TSSPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        tss: number | null;
    };
}
export declare class IFPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    if_high?: number | null;
    if_low?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        ifHigh?: number | null;
        ifLow?: number | null;
    } | {
        target_type: number;
        if_high?: number | null;
        if_low?: number | null;
    });
    static fromJson(json: any): IFPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        if_high: number | null;
        if_low: number | null;
    };
}
export declare class RepetitionPlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    repititions?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        repititions?: number | null;
    } | {
        target_type: number;
        repititions?: number | null;
    });
    static fromJson(json: any): RepetitionPlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        repititions: number | null;
    };
}
export declare class SwimStrokePlannedWorkoutStepTarget implements PlannedWorkoutStepTarget {
    target_type: number;
    swim_strokes?: number | null;
    constructor(args: {
        targetType?: PlannedWorkoutStepTargetType;
        swimStrokes?: number | null;
    } | {
        target_type: number;
        swim_strokes?: number | null;
    });
    static fromJson(json: any): SwimStrokePlannedWorkoutStepTarget;
    toJson(): {
        target_type: number;
        swim_strokes: number | null;
    };
}
export type PlannedWorkoutStepTargetUnion = CadencePlannedWorkoutStepTarget | HRPlannedWorkoutStepTarget | PowerPlannedWorkoutStepTarget | SpeedPlannedWorkoutStepTarget | PacePlannedWorkoutStepTarget | TSSPlannedWorkoutStepTarget | IFPlannedWorkoutStepTarget | RepetitionPlannedWorkoutStepTarget | SwimStrokePlannedWorkoutStepTarget;
export declare function parseTarget(json: any): PlannedWorkoutStepTargetUnion;
export declare class PlannedWorkoutStep implements PlannedWorkoutSteps {
    order?: number | null;
    type: number;
    name?: string | null;
    description?: string | null;
    intensity?: number | null;
    durations?: PlannedWorkoutStepDurationUnion[] | null;
    targets?: PlannedWorkoutStepTargetUnion[] | null;
    constructor(args: {
        order?: number | null;
        type?: number;
        name?: string | null;
        description?: string | null;
        intensity?: number | null;
        durations?: PlannedWorkoutStepDurationUnion[] | null;
        targets?: PlannedWorkoutStepTargetUnion[] | null;
    });
    static fromJson(json: any): PlannedWorkoutStep;
    toJson(): {
        order: number | null;
        type: number;
        name: string | null;
        description: string | null;
        intensity: number | null;
        durations: ({
            duration_type: number;
            seconds: number | null;
        } | {
            duration_type: number;
            power_above_watts: number | null;
        } | {
            duration_type: number;
            power_below_watts: number | null;
        } | {
            duration_type: number;
            rest_seconds: number | null;
        } | {
            duration_type: number;
            calories: number | null;
        } | {
            duration_type: number;
            hr_above_bpm: number | null;
        } | {
            duration_type: number;
            hr_below_bpm: number | null;
        } | {
            duration_type: number;
            distance_meters: number | null;
        } | {
            duration_type: number;
            steps: number | null;
        } | {
            duration_type: number;
            reps: number | null;
        })[] | null;
        targets: ({
            target_type: number;
            cadence_high: number | null;
            cadence_low: number | null;
            cadence: number | null;
        } | {
            target_type: number;
            hr_bpm_high: number | null;
            hr_bpm_low: number | null;
            hr_percentage: number | null;
            hr_percentage_low: number | null;
            hr_percentage_high: number | null;
        } | {
            target_type: number;
            power_watt_high: number | null;
            power_watt_low: number | null;
            power_watt: number | null;
            power_percentage: number | null;
            power_percentage_low: number | null;
            power_percentage_high: number | null;
        } | {
            target_type: number;
            speed_meters_per_second: number | null;
            speed_percentage: number | null;
            speed_percentage_low: number | null;
            speed_percentage_high: number | null;
        } | {
            target_type: number;
            pace_minutes_per_kilometer: number | null;
        } | {
            target_type: number;
            tss: number | null;
        } | {
            target_type: number;
            if_high: number | null;
            if_low: number | null;
        } | {
            target_type: number;
            repititions: number | null;
        } | {
            target_type: number;
            swim_strokes: number | null;
        })[] | null;
    };
}
export declare class PlannedWorkoutRepeatStep implements PlannedWorkoutSteps {
    order?: number | null;
    type: number;
    name?: string | null;
    description?: string | null;
    intensity?: number | null;
    durations?: PlannedWorkoutStepDurationUnion[] | null;
    targets?: PlannedWorkoutStepTargetUnion[] | null;
    steps?: PlannedWorkoutStep[] | null;
    constructor(args: {
        order?: number | null;
        type?: number;
        name?: string | null;
        description?: string | null;
        intensity?: number | null;
        durations?: PlannedWorkoutStepDurationUnion[] | null;
        targets?: PlannedWorkoutStepTargetUnion[] | null;
        steps?: PlannedWorkoutStep[] | null;
    });
    static fromJson(json: any): PlannedWorkoutRepeatStep;
    toJson(): {
        order: number | null;
        type: number;
        name: string | null;
        description: string | null;
        intensity: number | null;
        durations: ({
            duration_type: number;
            seconds: number | null;
        } | {
            duration_type: number;
            power_above_watts: number | null;
        } | {
            duration_type: number;
            power_below_watts: number | null;
        } | {
            duration_type: number;
            rest_seconds: number | null;
        } | {
            duration_type: number;
            calories: number | null;
        } | {
            duration_type: number;
            hr_above_bpm: number | null;
        } | {
            duration_type: number;
            hr_below_bpm: number | null;
        } | {
            duration_type: number;
            distance_meters: number | null;
        } | {
            duration_type: number;
            steps: number | null;
        } | {
            duration_type: number;
            reps: number | null;
        })[] | null;
        targets: ({
            target_type: number;
            cadence_high: number | null;
            cadence_low: number | null;
            cadence: number | null;
        } | {
            target_type: number;
            hr_bpm_high: number | null;
            hr_bpm_low: number | null;
            hr_percentage: number | null;
            hr_percentage_low: number | null;
            hr_percentage_high: number | null;
        } | {
            target_type: number;
            power_watt_high: number | null;
            power_watt_low: number | null;
            power_watt: number | null;
            power_percentage: number | null;
            power_percentage_low: number | null;
            power_percentage_high: number | null;
        } | {
            target_type: number;
            speed_meters_per_second: number | null;
            speed_percentage: number | null;
            speed_percentage_low: number | null;
            speed_percentage_high: number | null;
        } | {
            target_type: number;
            pace_minutes_per_kilometer: number | null;
        } | {
            target_type: number;
            tss: number | null;
        } | {
            target_type: number;
            if_high: number | null;
            if_low: number | null;
        } | {
            target_type: number;
            repititions: number | null;
        } | {
            target_type: number;
            swim_strokes: number | null;
        })[] | null;
        steps: {
            order: number | null;
            type: number;
            name: string | null;
            description: string | null;
            intensity: number | null;
            durations: ({
                duration_type: number;
                seconds: number | null;
            } | {
                duration_type: number;
                power_above_watts: number | null;
            } | {
                duration_type: number;
                power_below_watts: number | null;
            } | {
                duration_type: number;
                rest_seconds: number | null;
            } | {
                duration_type: number;
                calories: number | null;
            } | {
                duration_type: number;
                hr_above_bpm: number | null;
            } | {
                duration_type: number;
                hr_below_bpm: number | null;
            } | {
                duration_type: number;
                distance_meters: number | null;
            } | {
                duration_type: number;
                steps: number | null;
            } | {
                duration_type: number;
                reps: number | null;
            })[] | null;
            targets: ({
                target_type: number;
                cadence_high: number | null;
                cadence_low: number | null;
                cadence: number | null;
            } | {
                target_type: number;
                hr_bpm_high: number | null;
                hr_bpm_low: number | null;
                hr_percentage: number | null;
                hr_percentage_low: number | null;
                hr_percentage_high: number | null;
            } | {
                target_type: number;
                power_watt_high: number | null;
                power_watt_low: number | null;
                power_watt: number | null;
                power_percentage: number | null;
                power_percentage_low: number | null;
                power_percentage_high: number | null;
            } | {
                target_type: number;
                speed_meters_per_second: number | null;
                speed_percentage: number | null;
                speed_percentage_low: number | null;
                speed_percentage_high: number | null;
            } | {
                target_type: number;
                pace_minutes_per_kilometer: number | null;
            } | {
                target_type: number;
                tss: number | null;
            } | {
                target_type: number;
                if_high: number | null;
                if_low: number | null;
            } | {
                target_type: number;
                repititions: number | null;
            } | {
                target_type: number;
                swim_strokes: number | null;
            })[] | null;
        }[] | null;
    };
}
export type PlannedWorkoutStepsUnion = PlannedWorkoutStep | PlannedWorkoutRepeatStep;
export declare function parseStep(json: any): PlannedWorkoutStepsUnion;
export declare class PlannedWorkoutMetaData implements Jsonable {
    id: string;
    name: string;
    type: number;
    description: string;
    estimated_duration_seconds?: number | null;
    estimated_distance_meters?: number | null;
    estimated_calories?: number | null;
    estimated_elevation_gain_meters?: number | null;
    estimated_energy_kj?: number | null;
    estimated_tss?: number | null;
    estimated_if?: number | null;
    estimated_speed_meters_per_second?: number | null;
    estimated_tscore?: number | null;
    estimated_pace_minutes_per_kilometer?: number | null;
    provider?: string | null;
    created_date?: string | null;
    planned_date: string;
    pool_length_meters?: number | null;
    constructor(args: {
        id: string;
        name: string;
        type: number | ActivityType;
        description: string;
        estimated_duration_seconds?: number | null;
        estimated_distance_meters?: number | null;
        estimated_calories?: number | null;
        estimated_elevation_gain_meters?: number | null;
        estimated_energy_kj?: number | null;
        estimated_tss?: number | null;
        estimated_if?: number | null;
        estimated_speed_meters_per_second?: number | null;
        estimated_tscore?: number | null;
        estimated_pace_minutes_per_kilometer?: number | null;
        provider?: string | null;
        created_date?: string | null;
        planned_date: string;
        pool_length_meters?: number | null;
    });
    static fromJson(json: any): PlannedWorkoutMetaData;
    toJson(): {
        id: string;
        name: string;
        type: number;
        description: string;
        estimated_duration_seconds: number | null;
        estimated_distance_meters: number | null;
        estimated_calories: number | null;
        estimated_elevation_gain_meters: number | null;
        estimated_energy_kj: number | null;
        estimated_tss: number | null;
        estimated_if: number | null;
        estimated_speed_meters_per_second: number | null;
        estimated_tscore: number | null;
        estimated_pace_minutes_per_kilometer: number | null;
        provider: string | null;
        created_date: string | null;
        planned_date: string;
        pool_length_meters: number | null;
    };
}
export declare class TerraPlannedWorkout implements Jsonable {
    steps?: PlannedWorkoutStepsUnion[] | null;
    metadata?: PlannedWorkoutMetaData | null;
    constructor(args: {
        steps?: PlannedWorkoutStepsUnion[] | null;
        metadata?: PlannedWorkoutMetaData | null;
    });
    static fromJson(json: any): TerraPlannedWorkout;
    toJson(): {
        steps: {
            order: number | null;
            type: number;
            name: string | null;
            description: string | null;
            intensity: number | null;
            durations: ({
                duration_type: number;
                seconds: number | null;
            } | {
                duration_type: number;
                power_above_watts: number | null;
            } | {
                duration_type: number;
                power_below_watts: number | null;
            } | {
                duration_type: number;
                rest_seconds: number | null;
            } | {
                duration_type: number;
                calories: number | null;
            } | {
                duration_type: number;
                hr_above_bpm: number | null;
            } | {
                duration_type: number;
                hr_below_bpm: number | null;
            } | {
                duration_type: number;
                distance_meters: number | null;
            } | {
                duration_type: number;
                steps: number | null;
            } | {
                duration_type: number;
                reps: number | null;
            })[] | null;
            targets: ({
                target_type: number;
                cadence_high: number | null;
                cadence_low: number | null;
                cadence: number | null;
            } | {
                target_type: number;
                hr_bpm_high: number | null;
                hr_bpm_low: number | null;
                hr_percentage: number | null;
                hr_percentage_low: number | null;
                hr_percentage_high: number | null;
            } | {
                target_type: number;
                power_watt_high: number | null;
                power_watt_low: number | null;
                power_watt: number | null;
                power_percentage: number | null;
                power_percentage_low: number | null;
                power_percentage_high: number | null;
            } | {
                target_type: number;
                speed_meters_per_second: number | null;
                speed_percentage: number | null;
                speed_percentage_low: number | null;
                speed_percentage_high: number | null;
            } | {
                target_type: number;
                pace_minutes_per_kilometer: number | null;
            } | {
                target_type: number;
                tss: number | null;
            } | {
                target_type: number;
                if_high: number | null;
                if_low: number | null;
            } | {
                target_type: number;
                repititions: number | null;
            } | {
                target_type: number;
                swim_strokes: number | null;
            })[] | null;
        }[] | null;
        metadata: {
            id: string;
            name: string;
            type: number;
            description: string;
            estimated_duration_seconds: number | null;
            estimated_distance_meters: number | null;
            estimated_calories: number | null;
            estimated_elevation_gain_meters: number | null;
            estimated_energy_kj: number | null;
            estimated_tss: number | null;
            estimated_if: number | null;
            estimated_speed_meters_per_second: number | null;
            estimated_tscore: number | null;
            estimated_pace_minutes_per_kilometer: number | null;
            provider: string | null;
            created_date: string | null;
            planned_date: string;
            pool_length_meters: number | null;
        } | null;
    };
}
