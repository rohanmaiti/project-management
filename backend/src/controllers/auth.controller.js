import prisma from "../client.js";

export const me = async (req, res) => {
  try {
    const projects = await prisma.projects.findMany({
      where: {
        ProjectTeamMap: {
          teamId: {
            teamUserMap: {
              some: {
                user_id: req.user_id,
              },
            },
          },
        },
      },
    });

    const total_completed_projects = projects.filter((p) => p.status === 'COMPLETED');
    const response = {
      total_projects: projects.length,
      total_completed_projects: total_completed_projects.length,
      ...req.user,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

export const get_custom_fileds = async (req, res) => {
  try {
    const custom_status = await prisma.project_owner_custom_status.findMany({
      where: {
        project_owner_id: req.user.id,
      },
    });
    const custom_task_type =
      await prisma.project_owner_custom_task_type.findMany({
        where: {
          project_owner_id: req.user.id,
        },
      });
    return res.status(200).json({
      custom_status: custom_status,
      custom_task_type: custom_task_type,
    });
  } catch (error) {
    console.log("Error fetching custom fields", error?.message);
    return res.status(500).json({ message: error?.message });
  }
};
