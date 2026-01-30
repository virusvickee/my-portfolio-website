import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        console.error("Uncaught error:", error, errorInfo)
    }

    handleReload = () => {
        window.location.reload()
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-6">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl max-w-lg w-full text-center shadow-2xl">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="text-red-500" size={40} />
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong</h2>
                        <p className="text-gray-400 mb-8">
                            We encountered an unexpected error. Please try reloading the page.
                        </p>

                        {this.props.showDetails && this.state.error && (
                            <div className="text-left bg-black/30 p-4 rounded-xl mb-8 overflow-auto max-h-48 text-sm font-mono text-red-300">
                                {this.state.error.toString()}
                            </div>
                        )}

                        <button
                            onClick={this.handleReload}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center mx-auto space-x-2 group"
                        >
                            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                            <span>Reload Application</span>
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
