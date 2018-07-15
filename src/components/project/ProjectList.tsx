import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../reducers';
import { IProjectProps } from '../../types';
import { Project } from './Project'

interface IProjectListProps {
  projectList: IProjectProps[]
}

class ProjectList extends React.Component<IProjectListProps> {
  constructor(props: IProjectListProps) {
    super(props)
  }

  public render() {
    return (
      <section id="one" className="wrapper">
        <div className="inner">
          <div className="flex flex-3">
            {this.props.projectList.map(project => <Project key={project.key} {...project} />)}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    projectList: state.projectList
  }
}

export default connect(mapStateToProps)(ProjectList);
