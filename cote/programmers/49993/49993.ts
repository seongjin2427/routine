// * 49993. 스킬트리
// * ❌ 실패
// * 스택, 큐

// * 1 <= skill.length <= 26
// * 1 <= skill_trees.length <= 20

export default function solution(skill: string, skill_trees: string[]) {
  return skill_trees.filter((skills) => {
    let copySkill = skill;

    for (const s of skills) {
      const index = copySkill.indexOf(s);
      if (index > 0) return;
      else if (!index) copySkill = copySkill.slice(1);
    }
    return true;
  }).length;
}
