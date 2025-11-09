import prisma from "../client.js";

export const me = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json({ message: error?.message });
  }
};

export const get_custom_fileds = async (req, res) => {
  try {
    const custom_status = await prisma.peoject_owner_custom_status.findMany({
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
