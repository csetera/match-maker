/*
 * Taken from https://gist.github.com/axelpale/3118596#gistcomment-3107083
 */
export const k_combinations = <T>(set: T[], k: number): T[][] => {
    if (k > set.length || k <= 0) {
        return [];
    }

    if (k === set.length) {
        return [set];
    }

    if (k === 1) {
        return set.reduce((acc, cur) => [...acc, [cur]], [] as T[][]);
    }

    const combs = [] as T[][];
    let tail_combs = [];

    for (let i = 0; i <= set.length - k + 1; i++) {
        tail_combs = k_combinations(set.slice(i + 1), k - 1);
        for (let j = 0; j < tail_combs.length; j++) {
            combs.push([set[i], ...tail_combs[j]]);
        }
    }

    return combs;
};

export const combinations = <T>(set: T[]): T[][] => {
    return set.reduce((acc, _cur, idx) => [...acc, ...k_combinations(set, idx + 1)], [] as T[][]);
};
