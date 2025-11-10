import { XIcon } from "lucide-react";

const CreateProjectDialog = ({
  isDialogOpen,
  closeCreateProjectDialog,
  handleCreateProjectFormFieldsChange,
  isSubmitting,
  handelCreateProjectSubmit,
  createProjectFormRef,
}) => {

  if (!isDialogOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 dark:bg-black/60 backdrop-blur flex items-center justify-center text-left z-50">
      <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 w-full max-w-lg text-zinc-900 dark:text-zinc-200 relative">
        {/* X button */}
        <button
          className="absolute top-3 right-3 text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
          onClick={closeCreateProjectDialog}
        >
          <XIcon className="size-5" onClick={closeCreateProjectDialog} />
        </button>

        <h2 className="text-xl font-medium mb-1">Create New Project</h2>

        <form onSubmit={handelCreateProjectSubmit} className="space-y-4">
          {/* project Name */}
          <div>
            <label className="block text-sm mb-1">Project Name</label>
            <input
              type="text"
              name="name"
              onChange={handleCreateProjectFormFieldsChange}
              placeholder="Enter project name *"
              className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm"
              required
            />
          </div>

          {/* description */}
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              onChange={handleCreateProjectFormFieldsChange}
              placeholder="Describe your project"
              className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm h-20"
            />
          </div>

          {/* // TODO: have to change here be + const file  */}
          {/* status & priority */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Status</label>
              <select
                name="status"
                onChange={handleCreateProjectFormFieldsChange}
                className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm"
                required
              >
                <option selected> --select status-- </option>
                <option value="PLANNING">Planning</option>
                <option value="ACTIVE">Active</option>
                <option value="COMPLETED">Completed</option>
                <option value="ON_HOLD">On Hold</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-1">Priority</label>
              <select
                name="priority"
                onChange={handleCreateProjectFormFieldsChange}
                className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm"
                required
              >
                <option selected> --select priority-- </option>
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
              </select>
            </div>
          </div>

          {/* dates */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Start Date</label>
              <input
                type="date"
                name="start_date"
                onChange={handleCreateProjectFormFieldsChange}
                className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">End Date</label>
              <input
                type="date"
                name="end_date"
                onChange={handleCreateProjectFormFieldsChange}
                min={
                  createProjectFormRef?.current?.start_date &&
                  new Date(createProjectFormRef?.current?.start_date)
                    .toISOString()
                    .split("T")[0]
                }
                className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm"
                required
              />
            </div>
          </div>

          {/* team */}
          <div>
            <label className="block text-sm mb-1">Team Members</label>
            <select className="w-full px-3 py-2 rounded dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 mt-1 text-zinc-900 dark:text-zinc-200 text-sm">
              <option value="">Select team</option>
            </select>
          </div>

          {/* footer */}
          <div className="flex justify-end gap-3 pt-2 text-sm">
            <button
              type="button"
              onClick={closeCreateProjectDialog}
              className="px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 rounded bg-gradient-to-br from-blue-500 to-blue-600 text-white dark:text-zinc-200"
            >
              {isSubmitting ? "Creating..." : "Create Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectDialog;
