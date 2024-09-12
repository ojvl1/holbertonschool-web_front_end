class studentHogwarts {
  #privateScore = 0;
  #name = null;

  #changeScoreBy(points) {
    this.#privateScore += points;
  }

  setName(newName) {
    this.#name = newName
  }

  rewardStudent() {
    this.#changeScoreBy.apply(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return {
      `$(#name)`
  }
}
