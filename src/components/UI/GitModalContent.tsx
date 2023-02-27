import { modalContentProps } from "../../helpers/Props";


const GitModalContent = ({ setVisible }: modalContentProps) => {
  return (
    <div>
      <h3>Liked our content? Look for more:</h3>
      <a
        href="https://github.com/AfterAlabama?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setVisible(false)}
      >To GitHub</a>
    </div>
  );
};

export default GitModalContent;
